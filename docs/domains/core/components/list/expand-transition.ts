interface HTMLExpandElement extends HTMLElement {
  _parent?: (Node & ParentNode & HTMLElement) | null;
  _initialStyle?: {
    transition: string;
    overflow: string;
    height?: string | null;
    width?: string | null;
  };
}

export const expandTransitionFunctions = {
  onBeforeEnter(el: HTMLExpandElement) {
    el._parent = el.parentNode as (Node & ParentNode & HTMLElement) | null;
    el._initialStyle = {
      transition: el.style.transition,
      overflow: el.style.overflow,
      height: el.style.height,
    };
  },

  onEnter(el: HTMLExpandElement) {
    const initialStyle = el._initialStyle!;

    el.style.setProperty('transition', 'none', 'important');
    // Hide overflow to account for collapsed margins in the calculated height
    el.style.overflow = 'hidden';
    const offset = `${el.offsetHeight}px`;

    el.style.height = '0';

    void el.offsetHeight; // force reflow

    el.style.transition = initialStyle.transition;

    if (el._parent) {
      el._parent.classList.add('expand-transition');
    }

    requestAnimationFrame(() => {
      el.style.height = offset;
    });
  },

  onAfterEnter: resetStyles,
  onEnterCancelled: resetStyles,

  onLeave(el: HTMLExpandElement) {
    el._initialStyle = {
      transition: '',
      overflow: el.style.overflow,
      height: el.style.height,
    };

    el.style.overflow = 'hidden';
    el.style.height = `${el.offsetHeight}px`;
    void el.offsetHeight; // force reflow

    requestAnimationFrame(() => {
      el.style.height = '0';
    });
  },

  onAfterLeave,
  onLeaveCancelled: onAfterLeave,
};

function onAfterLeave(el: HTMLExpandElement) {
  if (el._parent) {
    el._parent.classList.remove('expand-transition');
  }
  resetStyles(el);
}

function resetStyles(el: HTMLExpandElement) {
  const size = el._initialStyle!.height;
  el.style.overflow = el._initialStyle!.overflow;
  if (size != null) {
    el.style.height = size;
  };
  delete el._initialStyle;
}
