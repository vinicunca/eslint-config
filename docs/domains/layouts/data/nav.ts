export interface NavItem {
  title: string;
  _path?: string;
}

export const navItems: NavItem[] = [
  {
    title: 'Installation',
    _path: '/installation',
  },
  {
    title: 'Presets',
    _path: '/presets',
  },
];
