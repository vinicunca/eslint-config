export function useNavItems() {
  const navItems = [
    {
      title: 'User Guide',
      parentPath: '/user-guide',
      _path: '/user-guide/installation',
    },
    {
      title: 'Configs',
      _path: '/configs/ignores',
      parentPath: '/configs',
    },
  ];

  const route = useRoute();

  function isActive(link: any) {
    return route.fullPath.startsWith(link.parentPath);
  }

  return {
    navItems,
    isActive,
  };
}
