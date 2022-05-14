import { IUser } from '@/types'
import { reactive } from 'vue'

interface IState {
  currentUser: IUser | null
}

const state = reactive<IState>({
  currentUser: null,
})

export default state

export function cleanCurrentUser() {
  state.currentUser = null
}

export function setCurrentUser(user: IUser) {
  state.currentUser = user
}

export function setApiKey(apiKey: string) {
  if (!state.currentUser) {
    return
  }

  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
