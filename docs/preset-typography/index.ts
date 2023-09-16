import { type Theme } from '@unocss/preset-mini';
import { type CSSObject, type Preset } from '@unocss/core';
import { toEscapedSelector } from '@unocss/core';

import { getPreflights } from './preflights';

/**
 * @public
 */
export interface TypographyOptions {
  /**
   * Extend or override CSS selectors with CSS declaration block.
   *
   * @defaultValue undefined
   */
  cssExtend?: Record<string, CSSObject>;
}

/**
 * UnoCSS Preset for Typography
 *
 * ```js
 * // uno.config.ts
 * import { presetUno, defineConfig, presetTypography } from 'unocss'
 *
 * export default defineConfig({
 *   presets: [
 *     presetUno(), // required
 *     presetTypography()
 *   ]
 * })
 * ```
 *
 * @returns typography preset
 * @public
 */

export function presetTypography(options?: TypographyOptions): Preset<Theme> {
  const escapedSelectors = new Set<string>();
  const selectorName = 'prose';
  const selectorNameRE = new RegExp(`^${selectorName}$`);
  const cssExtend = options?.cssExtend;

  return {
    name: '@vinicunca/unocss-preset-typography',
    enforce: 'post',
    layers: { typography: -20 },
    rules: [
      [
        selectorNameRE,
        (_, { rawSelector }) => {
          escapedSelectors.add(toEscapedSelector(rawSelector));
          return { color: 'var(--un-prose-body)' };
        },
        { layer: 'typography' },
      ],
    ],
    preflights: [
      {
        layer: 'typography',
        getCSS: () => {
          if (escapedSelectors.size > 0) {
            return getPreflights({ escapedSelectors, selectorName, cssExtend });
          }
        },
      },
    ],
  };
}
