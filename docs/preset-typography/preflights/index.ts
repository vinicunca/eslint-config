import { mergeDeep } from '@unocss/core';

import { DEFAULT } from './default';

function getCSS(
  options: {
    escapedSelector: string[];
    preflights: object;
    selectorName: string;
  },
): string {
  let css = '';

  const { escapedSelector, preflights, selectorName } = options;

  // eslint-disable-next-line no-restricted-syntax
  for (const selector in preflights) {
    // @ts-expect-error preflights do not have definitive keys
    const cssDeclarationBlock = preflights[selector];
    const notProseSelector = `:not(:where(.not-${selectorName},.not-${selectorName} *))`;

    // since pseudo class & elements can't be matched
    // within single :where(), they are split and rejoined.
    const pseudoCSSMatchArray = selector
      .split(',')
      .map((s) => {
        // pseudo class & pseudo elements matcher
        // matches :, ::, -, (), numbers and words
        const match = s.match(/::?(?:[\(\)\:\-\d\w]+)$/g);

        if (match) {
          const matchStr = match[0];
          s = s.replace(matchStr, '');
          return escapedSelector.map((e) =>
            `${e} :where(${s})${notProseSelector}${matchStr}`,
          ).join(',');
        }
        return null;
      })
      .filter((v) => v);

    // rejoin pseudo class & elements
    // multi selectors, single utility
    if (pseudoCSSMatchArray.length) {
      css += pseudoCSSMatchArray.join(',');
    } else {
      // directly from css declaration
      css += escapedSelector.map((e) =>
        `${e} :where(${selector})${notProseSelector}`,
      ).join(',');
    }

    css += '{';

    // eslint-disable-next-line no-restricted-syntax
    for (const k in cssDeclarationBlock) {
      const v = cssDeclarationBlock[k];
      css += `${k}:${v};`;
    }

    css += '}';
  }
  return css;
}

export function getPreflights(
  options: {
    cssExtend?: object | undefined;
    escapedSelectors: Set<string>;
    selectorName: string;
  },
): string {
  const { cssExtend, escapedSelectors, selectorName } = options;
  let escapedSelector = Array.from(escapedSelectors);

  // attribute mode -> add class selector with `:is()` pseudo-class function
  if (!escapedSelector[escapedSelector.length - 1].startsWith('.')) {
    escapedSelector = [`:is(${escapedSelector[escapedSelector.length - 1]},.${selectorName})`];
  }

  if (cssExtend) {
    return getCSS({ escapedSelector, preflights: mergeDeep(DEFAULT, cssExtend), selectorName });
  }

  return getCSS({ escapedSelector, preflights: DEFAULT, selectorName });
}
