export function useNavItems() {
  const navItems = [
    {
      _path: '/user-guide/installation',
      parentPath: '/user-guide',
      title: 'User Guide',
    },
    {
      _path: '/configs/ignores',
      parentPath: '/configs',
      title: 'Configs',
    },
  ];

  const route = useRoute();

  function isActive(link: any) {
    return route.fullPath.startsWith(link.parentPath);
  }

  return {
    isActive,
    navItems,
  };
}
