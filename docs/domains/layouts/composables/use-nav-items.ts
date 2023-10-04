export function useNavItems() {
  const navItems = [
    {
      title: 'User Guide',
      _path: '/user-guide',
    },
    {
      title: 'Configs',
      _path: '/configs',
    },
  ];

  const route = useRoute();

  function isActive(link: any) {
    return route.fullPath.startsWith(link._path);
  }

  return {
    navItems,
    isActive,
  };
}
