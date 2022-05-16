import Store, { GlobalModule, UserModule } from '@/store'

enum StoreModules {
  USER = 'User',
  GLOBAL = 'Global',
}
type IStoreUserModule = typeof UserModule
type IStoreGlobalModule = typeof GlobalModule
type IUseStore = IStoreUserModule | IStoreGlobalModule | typeof Store

export { StoreModules, IStoreUserModule, IStoreGlobalModule, IUseStore }
