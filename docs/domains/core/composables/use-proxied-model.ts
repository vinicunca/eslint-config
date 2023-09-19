import { computed, getCurrentInstance, ref, toRaw, watch } from 'vue';
import { type Ref } from 'vue';

import { useToggleScope } from './use-toggle-scope';

type InnerVal<T> = T extends any[] ? Readonly<T> : T;

export function useProxiedModel<
  Props extends object & { [key in Prop as `onUpdate:${Prop}`]: ((val: any) => void) | undefined },
  Prop extends Extract<keyof Props, string>,
  Inner = Props[Prop],
>(
  props: Props,
  prop: Prop,
  defaultValue?: Props[Prop],
  transformIn: (value?: Props[Prop]) => Inner = (v: any) => v,
  transformOut: (value: Inner) => Props[Prop] = (v: any) => v,
) {
  const vm = getCurrentInstance();
  const internal = ref(props[prop] !== undefined ? props[prop] : defaultValue) as Ref<Props[Prop]>;

  const isControlled = computed(() => {
    void props[prop];
    // eslint-disable-next-line no-prototype-builtins
    return !!(vm!.vnode.props?.hasOwnProperty(prop) && vm!.vnode.props?.hasOwnProperty(`onUpdate:${prop}`));
  });

  useToggleScope(() => !isControlled.value, () => {
    watch(() => props[prop], (val) => {
      internal.value = val;
    });
  });

  const model = computed({
    get(): any {
      const externalValue = props[prop];
      return transformIn(isControlled.value ? externalValue : internal.value);
    },
    set(internalValue) {
      const newValue = transformOut(internalValue);
      const value = toRaw(isControlled.value ? props[prop] : internal.value);
      if (value === newValue || transformIn(value) === internalValue) {
        return;
      }
      internal.value = newValue;
      vm?.emit(`update:${prop}`, newValue);
    },
  }) as any as Ref<InnerVal<Inner>> & { readonly externalValue: Props[Prop] };

  Object.defineProperty(model, 'externalValue', {
    get: () => isControlled.value ? props[prop] : internal.value,
  });

  return model;
}
