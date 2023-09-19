import type { NavItem } from '@nuxt/content/dist/runtime/types';

export interface INavItem extends NavItem {
  icon?: string;
  type?: string;
  value?: string;
  children?: INavItem[];
  _path?: string;
}
