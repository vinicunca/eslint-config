import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import rulesMeta from '../rules-meta.json';
import { RULES_BASIC } from '../src/basic';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateMeta() {
  const POSSIBLE_PROBLEMS = {};
  const SUGGESTIONS = {};
  const LAYOUT = {};

  Object.entries(RULES_BASIC!).forEach(([ruleName, rule]) => {
    const sourceMeta = rulesMeta[ruleName];

    if (sourceMeta) {
      const ruleObj = {
        description: sourceMeta.docs.description,
        url: sourceMeta.docs.url,
        options: rule,
      };

      switch (sourceMeta.type) {
        case 'suggestion':
          SUGGESTIONS[ruleName] = ruleObj;
          break;
        case 'layout':
          LAYOUT[ruleName] = ruleObj;
          break;
        default:
          POSSIBLE_PROBLEMS[ruleName] = ruleObj;
          break;
      }
    }
  });

  const dataDir = path.resolve(__dirname, '../../docs/data');

  const problemsFilePath = path.resolve(__dirname, dataDir, 'problems.json');

  const suggestionsFilePath = path.resolve(__dirname, dataDir, 'suggestions.json');

  const layoutFilePath = path.resolve(__dirname, dataDir, 'layout.json');

  fs.writeFileSync(problemsFilePath, JSON.stringify(POSSIBLE_PROBLEMS, null, 2));

  fs.writeFileSync(suggestionsFilePath, JSON.stringify(SUGGESTIONS, null, 2));

  fs.writeFileSync(layoutFilePath, JSON.stringify(LAYOUT, null, 2));
}

generateMeta();
