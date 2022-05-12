import Store from '@/store'

export function useStore(module: any) {
  if (module) {
    return Store[module]
  }

  return Store
}
