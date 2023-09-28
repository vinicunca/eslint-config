import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import { $fetch } from 'ofetch';
import { rules as styleRules } from '@eslint-stylistic/metadata';

import * as P from '@vinicunca/perkakas';

import { type FlatESLintConfigItem } from 'eslint-define-config';
import * as configs from '../src/configs';
import commentRulesJson from './comments-rules.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type RuleMeta = Record<string, {
  description: string;
  url: string;
  options?: any;
}>;

function generateMetaRules() {
  Promise.all([
    // transformIgnores(),
    // transformComments(),
    // transformImports(),
    // transformJs(),
    // transformJsdoc(),
    transformJsonc(),
  ]);
}

async function transformIgnores() {
  await writeJson('ignores', configs.ignores({})[0].ignores);
}

async function transformComments() {
  const srcJson: RuleMeta = await readJson('comment-rules');
  const rules = configs.comments()[1].rules!;

  const output = P.flatMapToObj(
    Object.keys(rules),
    (key) => {
      return [
        [
          key,
          {
            ...srcJson[key],
            options: rules[key],
          },
        ],
      ];
    },
  );

  await writeJson('comments', output);
}

async function transformImports() {
  const { plugins, rules } = configs.imports()[0];

  const readPromises: any[] = [];

  const output: Record<string, RuleMeta> = {};
  const srcMeta: Record<string, RuleMeta> = {};

  for (const key of Object.keys(plugins!)) {
    output[key] = {};

    readPromises.push(
      readJson(`${key}-rules`).then((res) => {
        srcMeta[key] = res;
      }),
    );
  }

  await Promise.all(readPromises);

  for (const key of Object.keys(rules!)) {
    const [pluginName] = key.split('/');

    output[pluginName][key] = {
      ...srcMeta[pluginName][key],
      options: rules![key],
    };
  }

  await writeJson('imports', output);
}

async function transformJs() {
  const srcJson: RuleMeta = await readJson('js-rules');
  const vinicuncaJson: RuleMeta = await readJson('vinicunca-rules');

  const { rules } = configs.javascript()[0];

  const output: Record<string, RuleMeta> = {
    core: {},
    vinicunca: {},
  };

  for (const key of Object.keys(rules!)) {
    if (key.startsWith('vinicunca')) {
      output.vinicunca[key] = {
        ...vinicuncaJson[key],
        options: rules![key],
      };
    } else if (key.startsWith('unused-imports')) {
      continue;
    } else {
      output.core[key] = {
        ...srcJson[key],
        options: rules![key],
      };
    }
  }

  await writeJson('javascript', output);
}

async function transformJsdoc() {
  const srcJson: RuleMeta = await readJson('jsdoc-rules');
  const eslintRules = configs.jsdoc()[1].rules!;

  const output = P.flatMapToObj(
    Object.keys(eslintRules),
    (key) => {
      return [
        [
          key,
          {
            ...srcJson[key],
            options: eslintRules[key],
          },
        ],
      ];
    },
  );

  await writeJson('jsdoc', output);
}

async function transformJsonc() {
  const srcJson: RuleMeta = await readJson('jsonc-rules');
  const eslintRules = configs.jsonc()[1].rules!;

  const output = P.flatMapToObj(
    Object.keys(eslintRules),
    (key) => {
      return [
        [
          key,
          {
            ...srcJson[key],
            options: eslintRules[key],
          },
        ],
      ];
    },
  );

  await writeJson('jsonc', output);
}

generateMetaRules();

(async () => {
  // writeJson('jsonc', jsonc[0].rules),
  // writeJson('markdown', markdown({ componentExts: [] })[0].rules),
  // writeJson('node', node[0].rules),
  // writeJson('react', react[0].rules),
  // writeJson('sortPackageJson', sortPackageJson[0].rules),
  // writeJson('sortTsconfig', sortTsconfig[0].rules),
  // writeJson('test', test({ isInEditor: false })[0].rules),
  // writeJson('typescript', typescript({ componentExts: [] })[0].rules),
  // writeJson('unicorn', unicorn[0].rules),
  // writeJson('vue', vue({ typescript: false })[0].rules),
  // writeJson('yaml', yaml[0].rules),
})();

function writeJson(fileName: string, content: any) {
  const docsDataDir = path.resolve(__dirname, '../../docs/domains/docs/data');

  const filePath = path.resolve(__dirname, docsDataDir, `${fileName}.json`);

  return fs.writeJSON(filePath, content, { spaces: 2, EOL: '\n' });
}

function readJson(fileName: string) {
  const filePath = path.resolve(__dirname, `${fileName}.json`);

  return fs.readJSON(filePath);
}

async function coba() {
  const configRules = stylistic()[1].rules!;
  // console.log('🚀 ~ coba ~ configRules:', configRules);

  // const promises: any[] = [];

  const result = P.flatMapToObj(
    Object.keys(configRules),
    (key) => {
      if (key.includes('style/') && configRules[key] !== 'off') {
        const [, ruleName] = key.split('style/');

        const styleRule = styleRules.find((rule) => rule.name === ruleName);

        return [
          [key, {
            description: styleRule?.meta?.docs?.description,
            url: `https://eslint.style/rules/js/${ruleName}`,
            options: configRules[key],
          }],
        ];
      }

      return [];
    },
  );
  console.log('🚀 ~ coba ~ result:', result);

  // Object.keys(configRules).map((key) => {
  //   if (key.includes('style/') && configRules[key] !== 'off') {
  //     const [, ruleName] = key.split('style/');
  //     // console.log('🚀 ~ Object.keys ~ ruleName:', ruleName);

  //     const anu = styleRules.find((rule) => rule.name === ruleName);
  //     console.log('🚀 ~ Object.keys ~ anu:', anu);

  //     //     const docsUrl = `https://typescript-eslint.io/rules/${ruleName}/`;
  //     //     const srcUrl = `https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/${ruleName}.md?plain=1`;

  //     //     const pattern = /'description: \'([^\']*)'/;

  //     //     promises.push($fetch(srcUrl).then((res) => {
  //     //       const resJson = JSON.parse(res);

  //     //       return {
  //     //         ruleName: key,
  //     //         description: resJson.payload.blob.rawLines[1].replace(pattern, '$1'),
  //     //         url: docsUrl,
  //     //         options: configRules[key],
  //     //       };
  //     //     }));
  //   }
  // });

  // const results = await Promise.all(promises);

  // writeJson('tseslint', results);
}
