import { makeAuthUseCase } from '../usecases/authUseCaseFactory'
import { useCreateAccount as useCreateAccountComposable } from '@/composables'

export const useCreateAccount = () => {
  const authUseCase = makeAuthUseCase()
  return useCreateAccountComposable(authUseCase)
}
