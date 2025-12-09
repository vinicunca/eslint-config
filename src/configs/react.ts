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

const ReactRouterPackages = [
  '@react-router/node',
  '@react-router/react',
  '@react-router/serve',
  '@react-router/dev',
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
    'react/no-leaked-conditional-rendering': WARN,
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
  const isUsingReactRouter = ReactRouterPackages.some((i) => isPackageExists(i));
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
        'react-web-api': plugins['@eslint-react/web-api'],
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
        // recommended rules from eslint-plugin-react-x https://eslint-react.xyz/docs/rules/overview#core-rules
        'react/no-access-state-in-setstate': ERROR,
        'react/no-array-index-key': WARN,
        'react/no-children-count': WARN,
        'react/no-children-for-each': WARN,
        'react/no-children-map': WARN,
        'react/no-children-only': WARN,
        'react/no-children-to-array': WARN,
        'react/no-clone-element': WARN,
        'react/no-comment-textnodes': WARN,
        'react/no-component-will-mount': ERROR,
        'react/no-component-will-receive-props': ERROR,
        'react/no-component-will-update': ERROR,
        'react/no-context-provider': WARN,
        'react/no-create-ref': ERROR,
        'react/no-default-props': ERROR,
        'react/no-direct-mutation-state': ERROR,
        'react/no-duplicate-jsx-props': WARN,
        'react/no-duplicate-key': WARN,
        'react/no-forward-ref': WARN,
        'react/no-implicit-key': WARN,
        'react/no-missing-key': ERROR,
        'react/no-nested-component-definitions': ERROR,
        'react/no-prop-types': ERROR,
        'react/no-redundant-should-component-update': ERROR,
        'react/no-set-state-in-component-did-mount': WARN,
        'react/no-set-state-in-component-did-update': WARN,
        'react/no-set-state-in-component-will-update': WARN,
        'react/no-string-refs': ERROR,
        'react/no-unsafe-component-will-mount': WARN,
        'react/no-unsafe-component-will-receive-props': WARN,
        'react/no-unsafe-component-will-update': WARN,
        'react/no-unstable-context-value': WARN,
        'react/no-unstable-default-props': WARN,
        'react/no-unused-class-component-members': WARN,
        'react/no-unused-state': WARN,
        'react/no-use-context': WARN,
        'react/no-useless-forward-ref': WARN,
        'react/use-jsx-vars': WARN,

        // recommended rules from eslint-plugin-react-dom https://eslint-react.xyz/docs/rules/overview#dom-rule
        'react-dom/no-dangerously-set-innerhtml': WARN,
        'react-dom/no-dangerously-set-innerhtml-with-children': ERROR,
        'react-dom/no-find-dom-node': ERROR,
        'react-dom/no-flush-sync': ERROR,
        'react-dom/no-hydrate': ERROR,
        'react-dom/no-missing-button-type': WARN,
        'react-dom/no-missing-iframe-sandbox': WARN,
        'react-dom/no-namespace': ERROR,
        'react-dom/no-render': ERROR,
        'react-dom/no-render-return-value': ERROR,
        'react-dom/no-script-url': WARN,
        'react-dom/no-unsafe-iframe-sandbox': WARN,
        'react-dom/no-unsafe-target-blank': WARN,
        'react-dom/no-use-form-state': ERROR,
        'react-dom/no-void-elements-with-children': ERROR,

        // recommended rules eslint-plugin-react-hooks https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks/src/rules
        'react-hooks/exhaustive-deps': WARN,
        'react-hooks/rules-of-hooks': ERROR,

        // recommended rules from eslint-plugin-react-hooks-extra https://eslint-react.xyz/docs/rules/overview#hooks-extra-rules
        'react-hooks-extra/no-direct-set-state-in-use-effect': WARN,
        'react-hooks-extra/no-unnecessary-use-prefix': WARN,

        // recommended rules from eslint-plugin-react-web-api https://eslint-react.xyz/docs/rules/overview#web-api-rules
        'react-web-api/no-leaked-event-listener': WARN,
        'react-web-api/no-leaked-interval': WARN,
        'react-web-api/no-leaked-resize-observer': WARN,
        'react-web-api/no-leaked-timeout': WARN,

        // preconfigured rules from eslint-plugin-react-refresh https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main/src
        'react-refresh/only-export-components': [
          WARN,
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...(isUsingNext
                ? [
                    'dynamic',
                    'dynamicParams',
                    'revalidate',
                    'fetchCache',
                    'runtime',
                    'preferredRegion',
                    'maxDuration',
                    'config',
                    'generateStaticParams',
                    'metadata',
                    'generateMetadata',
                    'viewport',
                    'generateViewport',
                  ]
                : []),
              ...(isUsingRemix || isUsingReactRouter
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
