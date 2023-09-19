import { type ComponentInternalInstance, getCurrentInstance } from 'vue';

let _uid = 0;
const _map = new WeakMap<ComponentInternalInstance, number>();

export function getUid() {
  const vm = getCurrentInstance()!;

  if (_map.has(vm)) {
    return _map.get(vm)!;
  } else {
    const uid = _uid++;
    _map.set(vm, uid);
    return uid;
  }
}
