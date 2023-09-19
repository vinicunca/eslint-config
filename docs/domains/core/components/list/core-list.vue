<script lang="ts" setup>
import CoreListChildren from './core-list-children.vue';
import { useNested } from './use-nested';

import { type INavItem } from '~/typings';

const props = defineProps<{
  navItems: INavItem[];
  opened: unknown[];
}>();

useNested(props as any);

const isFocused = shallowRef(false);
const contentRef = ref<HTMLElement>();

function onFocusin() {
  isFocused.value = true;
}

function onFocusout() {
  isFocused.value = false;
}

function onFocus(event: FocusEvent) {
  if (
    !isFocused.value
        && !(event.relatedTarget && contentRef.value?.contains(event.relatedTarget as Node))
  ) {
    focus();
  };
}

function onKeydown(event: KeyboardEvent) {
  if (!contentRef.value) {
    return;
  };

  if (event.key === 'ArrowDown') {
    focus('next');
  } else if (event.key === 'ArrowUp') {
    focus('prev');
  } else if (event.key === 'Home') {
    focus('first');
  } else if (event.key === 'End') {
    focus('last');
  } else {
    return;
  }

  event.preventDefault();
}

function focus(location?: 'next' | 'prev' | 'first' | 'last') {
  if (contentRef.value) {
    return focusChild(contentRef.value, location);
  }
}

function focusChild(el: Element, location?: 'next' | 'prev' | 'first' | 'last' | number) {
  const focusable = focusableChildren(el);

  if (!location) {
    if (el === document.activeElement || !el.contains(document.activeElement)) {
      focusable[0]?.focus();
    }
  } else if (location === 'first') {
    focusable[0]?.focus();
  } else if (location === 'last') {
    focusable.at(-1)?.focus();
  } else if (typeof location === 'number') {
    focusable[location]?.focus();
  } else {
    const _el = getNextElement(focusable, location);
    if (_el) {
      _el.focus();
    } else {
      focusChild(el, location === 'next' ? 'first' : 'last');
    };
  }
}

function focusableChildren(el: Element, filterByTabIndex = true) {
  const targets = ['button', '[href]', 'input:not([type="hidden"])', 'select', 'textarea', '[tabindex]']
    .map((s) => `${s}${filterByTabIndex ? ':not([tabindex="-1"])' : ''}:not([disabled])`)
    .join(', ');
  return [...el.querySelectorAll(targets)] as HTMLElement[];
}

function getNextElement(elements: HTMLElement[], location?: 'next' | 'prev', condition?: (el: HTMLElement) => boolean) {
  let _el;
  let idx = elements.indexOf(document.activeElement as HTMLElement);
  const inc = location === 'next' ? 1 : -1;
  do {
    idx += inc;
    _el = elements[idx];
  } while ((!_el || _el.offsetParent == null || !(condition?.(_el) ?? true)) && idx < elements.length && idx >= 0);
  return _el;
}
</script>

<template>
  <div
    ref="contentRef"
    role="listbox"
    class="overflow-hidden relative outline-none"
    style="--indent-padding: -8px;"
    :tabindex="isFocused ? -1 : 0"
    :aria-activedescendant="undefined"
    @focusin="onFocusin"
    @focusout="onFocusout"
    @focus="onFocus"
    @keydown="onKeydown"
  >
    <CoreListChildren :items="navItems" />
  </div>
</template>
