import { ToastInterface } from 'vue-toastification'

export function useCopy(toast: ToastInterface) {
  async function handleCopy(content: string) {
    await window.navigator.clipboard.writeText(content)
    toast.success('Copiado')
  }

  return {
    handleCopy,
  }
}
