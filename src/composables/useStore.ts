import Store from '@/store'
import { IUseStore, StoreModules } from '@/types'

export function useStore(module: StoreModules): IUseStore {
  if (module) {
    return Store[module]
  }

  return Store
}
