import { reactive } from 'vue'

interface IState {
  isLoading: boolean
}

const state = reactive<IState>({
  isLoading: false,
})

export default state

export function setGlobalLoading(status: boolean) {
  state.isLoading = status
}
