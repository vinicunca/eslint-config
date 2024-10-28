import { useData } from 'vitepress';

const pluginColorMap: Record<string, {
  dark: string;
  light: string;
}> = {
  import: {
    dark: '#e36209',
    light: '#e36209',
  },
  node: {
    dark: '#026e00',
    light: '#026e00',
  },
  perfectionist: {
    dark: '#a8b1ff',
    light: '#3451b2',
  },
  style: {
    dark: '#ffac45',
    light: '#ffac45',
  },
  ts: {
    dark: '#2b7489',
    light: '#2b7489',
  },
  vue: {
    dark: '#41b883',
    light: '#41b883',
  },
};

function getHashColorFromString(name: string, saturation = 65, lightness = 40, opacity: number | string = 1) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  };
  const h = hash % 360;
  return `hsla(${h}, ${saturation}%, ${lightness}%, ${opacity})`;
}

export const pluginUrlMap: Record<string, string> = {
  'eslint-comments': 'https://mysticatea.github.io/eslint-plugin-eslint-comments',
  'import': 'https://github.com/un-es/eslint-plugin-i',
  'jsdoc': 'https://github.com/gajus/eslint-plugin-jsdoc',
  'jsonc': 'https://ota-meshi.github.io/eslint-plugin-jsonc',
  'node': 'https://github.com/eslint-community/eslint-plugin-n',
  'perfectionist': 'https://eslint-plugin-perfectionist.azat.io',
  'style': 'https://eslint.style',
  'ts': 'https://typescript-eslint.io',
  'unicorn': 'https://github.com/sindresorhus/eslint-plugin-unicorn',
  'unused-imports': 'https://github.com/sweepline/eslint-plugin-unused-imports',
  'vue': 'https://eslint.vuejs.org',
  'antfu': 'https://github.com/antfu/eslint-plugin-antfu',
  'astro': 'https://ota-meshi.github.io/eslint-plugin-astro',
  'command': 'https://eslint-plugin-command.antfu.me',
  'format': 'https://github.com/antfu/eslint-plugin-format',
  'regexp': 'https://github.com/ota-meshi/eslint-plugin-regexp',
  'solid': 'https://github.com/solidjs-community/eslint-plugin-solid',
  'sonar': 'https://github.com/SonarSource/SonarJS#readme',
  'svelte': 'https://sveltejs.github.io/eslint-plugin-svelte',
  'toml': 'https://ota-meshi.github.io/eslint-plugin-toml',
};

export function usePluginColor() {
  const { isDark } = useData();

  function getPluginColor(name: string) {
    const mappedColor = pluginColorMap[name];
    if (mappedColor) {
      return isDark.value ? mappedColor.dark : mappedColor.light;
    }

    return getHashColorFromString(name);
  }

  return {
    getPluginColor,
  };
}
