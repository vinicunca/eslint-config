import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import rulesMeta from '../rules-meta.json';
import {
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  react,
  sortPackageJson,
  sortTsconfig,
  test,
  typescript,
  unicorn,
  vue,
  yml,
} from '../src/configs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  await Promise.all([
    writeJson('comments', comments[0].rules),
    writeJson('ignores', ignores({})[0].ignores),
    writeJson('imports', imports[0].rules),
    writeJson('javascript', javascript({ isInEditor: false })[0].rules),
    writeJson('jsdoc', jsdoc[0].rules),
    writeJson('jsonc', jsonc[0].rules),
    writeJson('markdown', markdown({ componentExts: [] })[0].rules),
    writeJson('node', node[0].rules),
    writeJson('react', react[0].rules),
    writeJson('sortPackageJson', sortPackageJson[0].rules),
    writeJson('sortTsconfig', sortTsconfig[0].rules),
    writeJson('test', test({ isInEditor: false })[0].rules),
    writeJson('typescript', typescript({ componentExts: [] })[0].rules),
    writeJson('unicorn', unicorn[0].rules),
    writeJson('vue', vue({ typescript: false })[0].rules),
    writeJson('yml', yml[0].rules),
  ]);

  // const POSSIBLE_PROBLEMS = {};
  // const SUGGESTIONS = {};
  // const LAYOUT = {};

  // Object.entries(RULES_BASIC!).forEach(([ruleName, rule]) => {
  //   const sourceMeta = rulesMeta[ruleName];

  //   if (sourceMeta) {
  //     const ruleObj = {
  //       description: sourceMeta.docs.description,
  //       url: sourceMeta.docs.url,
  //       options: rule,
  //     };

  //     switch (sourceMeta.type) {
  //       case 'suggestion':
  //         SUGGESTIONS[ruleName] = ruleObj;
  //         break;
  //       case 'layout':
  //         LAYOUT[ruleName] = ruleObj;
  //         break;
  //       default:
  //         POSSIBLE_PROBLEMS[ruleName] = ruleObj;
  //         break;
  //     }
  //   }
  // });

  // const dataDir = path.resolve(__dirname, '../../docs/data');

  // const problemsFilePath = path.resolve(__dirname, dataDir, 'problems.json');

  // const suggestionsFilePath = path.resolve(__dirname, dataDir, 'suggestions.json');

  // const layoutFilePath = path.resolve(__dirname, dataDir, 'layout.json');

  // fs.writeFileSync(problemsFilePath, JSON.stringify(POSSIBLE_PROBLEMS, null, 2));

  // fs.writeFileSync(suggestionsFilePath, JSON.stringify(SUGGESTIONS, null, 2));

  // fs.writeFileSync(layoutFilePath, JSON.stringify(LAYOUT, null, 2));
})();

function writeJson(fileName: string, content: any) {
  const docsDataDir = path.resolve(__dirname, '../../docs/domains/docs/data');

  const filePath = path.resolve(__dirname, docsDataDir, `${fileName}.json`);

  return fs.writeFile(filePath, `${JSON.stringify(content, null, 2)}\r\n`, (err) => {
    if (err) {
      console.error(`error writing file: ${filePath}`, err);
    } else {
      console.info(`Successfully wrote file: ${filePath}`);
    }
  });
}
