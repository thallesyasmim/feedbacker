import Store from '@/store'
import { StoreModules } from '@/types'

export function useStore(module: StoreModules) {
  if (module) {
    return Store[module]
  }

  return Store
}
