import { useProxiedModel } from '~~/domains/core/composables/use-proxied-model';
import { getUid } from '~~/domains/core/utils/get-uid';
import { getCurrentInstance } from 'vue';

import { listOpenStrategy } from './open-strategies';

interface NestedProvide {
  id: Ref<unknown>;
  isGroupActivator?: boolean;
  root: {
    children: Ref<Map<unknown, unknown[]>>;
    open: (id: unknown, value: boolean, event?: Event) => void;
    opened: Ref<Set<unknown>>;
    parents: Ref<Map<unknown, unknown>>;
    register: (id: unknown, parentId: unknown, isGroup?: boolean) => void;
    unregister: (id: unknown) => void;
  };
};

export const UseNestedSymbol: InjectionKey<NestedProvide> = Symbol.for('use-nested');

interface NestedProps {
  'onUpdate:opened': ((val: unknown[]) => void) | undefined;
  opened: readonly unknown[] | undefined;
}

export function useNested(props: NestedProps) {
  let isUnmounted = false;

  const children = ref(new Map<unknown, unknown[]>());
  const parents = ref(new Map<unknown, unknown>());

  const opened = useProxiedModel(
    props,
    'opened',
    props.opened,
    (v) => new Set(v),
    (v) => [...v.values()],
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
      children,
      open: (id, value, event) => {
        vm!.emit('click:open', { event, id, path: getPath(id), value });

        const newOpened = listOpenStrategy.open({
          children: children.value,
          event,
          id,
          opened: new Set(opened.value),
          parents: parents.value,
          value,
        });

        newOpened && (opened.value = newOpened);
      },
      opened,
      parents,
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
    },
  };

  provide(UseNestedSymbol, nested);
}

export const emptyNested: NestedProvide = {
  id: shallowRef(),
  root: {
    children: ref(new Map()),
    open: () => null,
    opened: ref(new Set()),
    parents: ref(new Map()),
    register: () => null,
    unregister: () => null,
  },
};

export function useNestedItem(id: Ref<unknown>, isGroup: boolean) {
  const parent = inject(UseNestedSymbol, emptyNested);

  const uidSymbol = Symbol(getUid());
  const computedId = computed(() => id.value !== undefined ? id.value : uidSymbol);

  const item = {
    ...parent,
    id: computedId,
    isGroupActivator: parent.isGroupActivator,
    isOpen: computed(() => parent.root.opened.value.has(computedId.value)),
    open: (open: boolean, e: Event) => parent.root.open(computedId.value, open, e),
    parent: computed(() => parent.root.parents.value.get(computedId.value)),
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
