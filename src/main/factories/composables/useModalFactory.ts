import { makeEmitter } from '../utils/emitterSingleton'
import { useModal as useModalComposable } from '@/composables'

export const useModal = () => {
  const emitter = makeEmitter()
  return useModalComposable(emitter)
}
