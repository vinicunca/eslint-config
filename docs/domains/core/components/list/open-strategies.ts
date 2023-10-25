type OpenStrategyFn = (data: {
  children: Map<unknown, unknown[]>;
  event?: Event;
  id: unknown;
  opened: Set<unknown>;
  parents: Map<unknown, unknown>;
  value: boolean;
}) => Set<unknown>;

type OpenSelectStrategyFn = (data: {
  children: Map<unknown, unknown[]>;
  event?: Event;
  id: unknown;
  opened: Set<unknown>;
  parents: Map<unknown, unknown>;
  selected: Map<unknown, 'indeterminate' | 'off' | 'on'>;
  value: boolean;
}) => Set<unknown> | null;

interface OpenStrategy {
  open: OpenStrategyFn;
  select: OpenSelectStrategyFn;
};

export const listOpenStrategy: OpenStrategy = {
  open: ({ id, opened, parents, value }) => {
    if (value) {
      let parent = parents.get(id);
      opened.add(id);

      while (parent != null && parent !== id) {
        opened.add(parent);
        parent = parents.get(parent);
      }

      return opened;
    } else {
      opened.delete(id);
    }
    return opened;
  },
  select: ({ id, opened, parents, value }) => {
    if (!value) {
      return opened;
    };

    const path: unknown[] = [];

    let parent = parents.get(id);

    while (parent != null) {
      path.push(parent);
      parent = parents.get(parent);
    }

    return new Set(path);
  },
};
