import { throttleAndDebounce } from '~/domains/core/utils/throttle-and-debounce';

// magic number to avoid repeated retrieval
const PAGE_OFFSET = 71;

export function useActiveAnchor(
  container: Ref<HTMLElement>,
  marker: Ref<HTMLElement>,
) {
  const onScroll = throttleAndDebounce(setActiveLink, 100);

  const route = useRoute();

  let prevActiveLink: HTMLAnchorElement | null = null;

  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener('scroll', onScroll);
  });

  onUpdated(() => {
    // sidebar update means a route change
    activateLink(location.hash);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  function setActiveLink() {
    const links = [].slice.call(
      container.value.querySelectorAll('.outline-link'),
    ) as HTMLAnchorElement[];

    const anchors = [].slice
      .call(document.querySelectorAll('.document-driven-page .header-anchor'))
      .filter((anchor: HTMLAnchorElement) => {
        return links.some((link) => {
          return link.hash === anchor.hash && anchor.offsetParent !== null;
        });
      }) as HTMLAnchorElement[];

    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;

    // page bottom - highlight last one
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];

      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor);

      if (isActive) {
        activateLink(hash);
        return;
      }
    }
  }

  function activateLink(hash: string | null) {
    // If there's no toc then there's no marker ref
    if (!marker.value) {
      return;
    }

    if (prevActiveLink) {
      prevActiveLink.classList.remove('active');
    }

    if (hash !== null) {
      prevActiveLink = container.value.querySelector(
        `a[href="${route.path}${decodeURIComponent(hash)}"]`,
      );
    }

    const activeLink = prevActiveLink;

    if (activeLink) {
      activeLink.classList.add('active');
      marker.value.style.top = `${activeLink.offsetTop + 33}px`;
      marker.value.style.opacity = '1';
    } else {
      marker.value.style.top = '33px';
      marker.value.style.opacity = '0';
    }
  }
}

function getAnchorTop(anchor: HTMLAnchorElement): number {
  return anchor.parentElement!.offsetTop - PAGE_OFFSET;
}

function isAnchorActive(
  index: number,
  anchor: HTMLAnchorElement,
  nextAnchor: HTMLAnchorElement | undefined,
): [boolean, string | null] {
  const scrollTop = window.scrollY;

  if (index === 0 && scrollTop === 0) {
    return [true, null];
  }

  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }

  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }

  return [false, null];
}
