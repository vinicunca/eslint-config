export function useNav() {
  const isDrawerOpen = ref(false);

  function openDrawer() {
    isDrawerOpen.value = true;
    window.addEventListener('resize', closeOnTabletWindow);
  }

  function closeDrawer() {
    isDrawerOpen.value = false;
    window.removeEventListener('resize', closeOnTabletWindow);
  }

  function toggleDrawer() {
    isDrawerOpen.value ? closeDrawer() : openDrawer();
  }

  const isSidebarOpen = ref(false);

  function openSidebar() {
    isSidebarOpen.value = true;
    window.addEventListener('resize', closeOnTabletWindow);
  }

  function closeSidebar() {
    isSidebarOpen.value = false;
    window.removeEventListener('resize', closeOnTabletWindow);
  }

  function toggleSidebar() {
    isSidebarOpen.value ? closeSidebar() : openSidebar();
  }

  function closeDrawerAndSidebar() {
    closeDrawer();
    closeSidebar();
  }

  /**
   * Close drawer when the user resizes the window wider than tablet size.
   */
  function closeOnTabletWindow() {
    window.outerWidth >= 768 && closeDrawerAndSidebar();
  }

  const route = useRoute();
  watch(() => route.path, closeDrawerAndSidebar);

  return {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,

    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
}
