type OpenStrategyFn = (data: {
  id: unknown;
  value: boolean;
  opened: Set<unknown>;
  children: Map<unknown, unknown[]>;
  parents: Map<unknown, unknown>;
  event?: Event;
}) => Set<unknown>;

type OpenSelectStrategyFn = (data: {
  id: unknown;
  value: boolean;
  opened: Set<unknown>;
  selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
  children: Map<unknown, unknown[]>;
  parents: Map<unknown, unknown>;
  event?: Event;
}) => Set<unknown> | null;

interface OpenStrategy {
  open: OpenStrategyFn;
  select: OpenSelectStrategyFn;
};

export const listOpenStrategy: OpenStrategy = {
  open: ({ id, value, opened, parents }) => {
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
  select: ({ id, value, opened, parents }) => {
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
