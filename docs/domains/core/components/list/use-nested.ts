import { getCurrentInstance } from 'vue';

import { listOpenStrategy } from './open-strategies';

import { getUid } from '~~/domains/core/utils/get-uid';
import { useProxiedModel } from '~~/domains/core/composables/use-proxied-model';

interface NestedProvide {
  id: Ref<unknown>;
  isGroupActivator?: boolean;
  root: {
    children: Ref<Map<unknown, unknown[]>>;
    parents: Ref<Map<unknown, unknown>>;
    opened: Ref<Set<unknown>>;
    register: (id: unknown, parentId: unknown, isGroup?: boolean) => void;
    unregister: (id: unknown) => void;
    open: (id: unknown, value: boolean, event?: Event) => void;
  };
};

export const UseNestedSymbol: InjectionKey<NestedProvide> = Symbol.for('use-nested');

interface NestedProps {
  opened: readonly unknown[] | undefined;
  'onUpdate:opened': ((val: unknown[]) => void) | undefined;
}

export function useNested(props: NestedProps) {
  let isUnmounted = false;

  const children = ref(new Map<unknown, unknown[]>());
  const parents = ref(new Map<unknown, unknown>());

  const opened = useProxiedModel(
    props, 'opened', props.opened, (v) => new Set(v), (v) => [...v.values()],
  );

  onBeforeUnmount(() => {
    isUnmounted = true;
  });

  function getPath(id: unknown) {
    const path: unknown[] = [];
    let parent: unknown = id;

    while (parent != null) {
      path.unshift(parent);
      parent = parents.value.get(parent);
    }

    return path;
  }

  const vm = getCurrentInstance();

  const nested: NestedProvide = {
    id: shallowRef(),
    root: {
      opened,
      register: (id, parentId, isGroup) => {
        parentId && id !== parentId && parents.value.set(id, parentId);

        isGroup && children.value.set(id, []);

        if (parentId != null) {
          children.value.set(parentId, [...children.value.get(parentId) || [], id]);
        }
      },
      unregister: (id) => {
        if (isUnmounted) {
          return;
        };

        children.value.delete(id);
        const parent = parents.value.get(id);
        if (parent) {
          const list = children.value.get(parent) ?? [];
          children.value.set(parent, list.filter((child) => child !== id));
        }
        parents.value.delete(id);
        opened.value.delete(id);
      },
      open: (id, value, event) => {
        vm!.emit('click:open', { id, value, path: getPath(id), event });

        const newOpened = listOpenStrategy.open({
          id,
          value,
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event,
        });

        newOpened && (opened.value = newOpened);
      },
      children,
      parents,
    },
  };

  provide(UseNestedSymbol, nested);
}

export const emptyNested: NestedProvide = {
  id: shallowRef(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: ref(new Map()),
    children: ref(new Map()),
    open: () => null,
    opened: ref(new Set()),
  },
};

export function useNestedItem(id: Ref<unknown>, isGroup: boolean) {
  const parent = inject(UseNestedSymbol, emptyNested);

  const uidSymbol = Symbol(getUid());
  const computedId = computed(() => id.value !== undefined ? id.value : uidSymbol);

  const item = {
    ...parent,
    id: computedId,
    open: (open: boolean, e: Event) => parent.root.open(computedId.value, open, e),
    isOpen: computed(() => parent.root.opened.value.has(computedId.value)),
    parent: computed(() => parent.root.parents.value.get(computedId.value)),
    isGroupActivator: parent.isGroupActivator,
  };

  !parent.isGroupActivator && parent.root.register(computedId.value, parent.id.value, isGroup);

  onBeforeUnmount(() => {
    !parent.isGroupActivator && parent.root.unregister(computedId.value);
  });

  isGroup && provide(UseNestedSymbol, item);

  return item;
};

export function useNestedGroupActivator() {
  const parent = inject(UseNestedSymbol, emptyNested);

  provide(UseNestedSymbol, { ...parent, isGroupActivator: true });
}
