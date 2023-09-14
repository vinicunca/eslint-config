import { defineFlatConfig } from 'eslint-define-config';
import basicConfig from './basic';

export const defineConfig = defineFlatConfig;

export const vinicuncaESLint = [
  ...basicConfig,
]
