import { makeGetCurrentUserUseCase } from '../usecases/getCurrentUserUseCaseFactory'
import { useGetCurrentUser as useGetCurrentUserComposable } from '@/composables'

export const useGetCurrentUser = () => {
  const getCurrentUserUseCase = makeGetCurrentUserUseCase()
  return useGetCurrentUserComposable(getCurrentUserUseCase)
}
