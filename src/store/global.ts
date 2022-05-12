import { reactive } from 'vue'

const state = reactive({
  isLoading: false,
})

export default state

export function setGlobalLoading(status: boolean) {
  state.isLoading = status
}
