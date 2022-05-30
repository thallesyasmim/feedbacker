import { useToast } from 'vue-toastification'
import { useCopy as useCopyComposable } from '@/composables'

export const useCopy = () => {
  const toast = useToast()
  return useCopyComposable(toast)
}
