import type { NavItem } from '@nuxt/content/dist/runtime/types';

export interface INavItem extends NavItem {
  _path?: string;
  children?: INavItem[];
  icon?: string;
  type?: string;
  value?: string;
}
