import { GetCurrentUserUseCase } from '@/domain/usecases/getCurrentUserUseCase'
import { makeGetCurrentUserRepository } from '../repositories/getCurrentUserRepositoryFactory'

export const makeGetCurrentUserUseCase = () => {
  const getCurrentUserRepository = makeGetCurrentUserRepository()
  return new GetCurrentUserUseCase(getCurrentUserRepository)
}
