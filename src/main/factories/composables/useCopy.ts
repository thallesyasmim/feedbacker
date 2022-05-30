import { useToast } from 'vue-toastification'
import { useCopy as useCopyComposable } from '@/composables/useCopy'

export const useCopy = () => {
  const toast = useToast()
  return useCopyComposable(toast)
}
