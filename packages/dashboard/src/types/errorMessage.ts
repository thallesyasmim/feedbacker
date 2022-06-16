import { Ref } from 'vue'

export type ErrorMessage = {
  id: string
  message: string | Ref<string>
}
