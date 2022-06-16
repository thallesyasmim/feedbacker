import { makeAuthUseCase } from '../usecases/authUseCaseFactory'
import { useLogin as useLoginComposable } from '@/composables'

export const useLogin = () => {
  const authUseCase = makeAuthUseCase()
  return useLoginComposable(authUseCase)
}
