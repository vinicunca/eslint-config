import type { OptionsFiles, OptionsOverrides, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes, TypedFlatConfigItem } from '../types';

import { isPackageExists } from 'local-pkg';

import { ERROR, WARN } from '../flags';
import { GLOB_ASTRO_TS, GLOB_MARKDOWN, GLOB_SRC, GLOB_TS, GLOB_TSX } from '../globs';
import { interopDefault } from '../utils';

// react refresh
const ReactRefreshAllowConstantExportPackages = [
  'vite',
];

const RemixPackages = [
  '@remix-run/node',
  '@remix-run/react',
  '@remix-run/serve',
  '@remix-run/dev',
];

const NextJsPackages = [
  'next',
];

export async function react(
  options: OptionsFiles & OptionsOverrides & OptionsTypeScriptParserOptions & OptionsTypeScriptWithTypes = {},
): Promise<Array<TypedFlatConfigItem>> {
  const {
    files = [GLOB_SRC],
    filesTypeAware = [GLOB_TS, GLOB_TSX],
    ignoresTypeAware = [
      `${GLOB_MARKDOWN}/**`,
      GLOB_ASTRO_TS,
    ],
    overrides = {},
    tsconfigPath,
  } = options;

  const isTypeAware = !!tsconfigPath;

  const typeAwareRules: TypedFlatConfigItem['rules'] = {
    'react/no-leaked-conditional-rendering': 'warn',
  };

  const [
    pluginReact,
    pluginReactHooks,
    pluginReactRefresh,
  ] = await Promise.all([
    interopDefault(import('@eslint-react/eslint-plugin')),
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('eslint-plugin-react-refresh')),
  ] as const);

  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some((i) => isPackageExists(i));
  const isUsingRemix = RemixPackages.some((i) => isPackageExists(i));
  const isUsingNext = NextJsPackages.some((i) => isPackageExists(i));

  const plugins = pluginReact.configs.all.plugins;

  return [
    {
      name: 'vinicunca/react/setup',

      plugins: {
        'react': plugins['@eslint-react'],
        'react-dom': plugins['@eslint-react/dom'],
        'react-hooks': pluginReactHooks,
        'react-hooks-extra': plugins['@eslint-react/hooks-extra'],
        'react-naming-convention': plugins['@eslint-react/naming-convention'],
        'react-refresh': pluginReactRefresh,
      },
    },

    {
      files,

      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },

      name: 'vinicunca/react/rules',

      rules: {
        // recommended rules from @eslint-react/dom
        'react-dom/no-children-in-void-dom-elements': WARN,
        'react-dom/no-dangerously-set-innerhtml': WARN,
        'react-dom/no-dangerously-set-innerhtml-with-children': ERROR,
        'react-dom/no-find-dom-node': ERROR,
        'react-dom/no-missing-button-type': WARN,
        'react-dom/no-missing-iframe-sandbox': WARN,
        'react-dom/no-namespace': ERROR,
        'react-dom/no-render-return-value': ERROR,
        'react-dom/no-script-url': WARN,
        'react-dom/no-unsafe-iframe-sandbox': WARN,
        'react-dom/no-unsafe-target-blank': WARN,

        // recommended rules react-hooks
        'react-hooks/exhaustive-deps': WARN,
        'react-hooks/rules-of-hooks': ERROR,

        // react refresh
        'react-refresh/only-export-components': [
          WARN,
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...(isUsingNext
                ? [
                    'config',
                    'generateStaticParams',
                    'metadata',
                    'generateMetadata',
                    'viewport',
                    'generateViewport',
                  ]
                : []),
              ...(isUsingRemix
                ? [
                    'meta',
                    'links',
                    'headers',
                    'loader',
                    'action',
                  ]
                : []),
            ],
          },
        ],

        // recommended rules from @eslint-react
        'react/ensure-forward-ref-using-ref': WARN,
        'react/no-access-state-in-setstate': ERROR,
        'react/no-array-index-key': WARN,
        'react/no-children-count': WARN,
        'react/no-children-for-each': WARN,
        'react/no-children-map': WARN,
        'react/no-children-only': WARN,
        'react/no-children-prop': WARN,
        'react/no-children-to-array': WARN,
        'react/no-clone-element': WARN,
        'react/no-comment-textnodes': WARN,
        'react/no-component-will-mount': ERROR,
        'react/no-component-will-receive-props': ERROR,
        'react/no-component-will-update': ERROR,
        'react/no-create-ref': ERROR,
        'react/no-direct-mutation-state': ERROR,
        'react/no-duplicate-key': ERROR,
        'react/no-implicit-key': ERROR,
        'react/no-missing-key': ERROR,
        'react/no-nested-components': WARN,
        'react/no-redundant-should-component-update': ERROR,
        'react/no-set-state-in-component-did-mount': WARN,
        'react/no-set-state-in-component-did-update': WARN,
        'react/no-set-state-in-component-will-update': WARN,
        'react/no-string-refs': ERROR,
        'react/no-unsafe-component-will-mount': WARN,
        'react/no-unsafe-component-will-receive-props': WARN,
        'react/no-unsafe-component-will-update': WARN,
        'react/no-unstable-context-value': ERROR,
        'react/no-unstable-default-props': ERROR,
        'react/no-unused-class-component-members': WARN,
        'react/no-unused-state': WARN,
        'react/no-useless-fragment': WARN,
        'react/prefer-destructuring-assignment': WARN,
        'react/prefer-shorthand-boolean': WARN,
        'react/prefer-shorthand-fragment': WARN,

        // overrides
        ...overrides,
      },
    },

    ...isTypeAware
      ? [{
          files: filesTypeAware,
          ignores: ignoresTypeAware,
          name: 'antfu/react/type-aware-rules',
          rules: {
            ...typeAwareRules,
          },
        }]
      : [],
  ];
}
