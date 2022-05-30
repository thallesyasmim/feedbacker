import { AuthUseCase } from '@/domain/usecases/authUseCase'
import { makeCreateAccountRepository } from '../repositories/createAccountRepositoryFactory'
import { makeTokenGeneratorRepository } from '../repositories/tokenGeneratorRepositoryFactory'

export const makeAuthUseCase = () => {
  const tokenGeneratorRepository = makeTokenGeneratorRepository()
  const createAccountRepository = makeCreateAccountRepository()
  return new AuthUseCase(tokenGeneratorRepository, createAccountRepository)
}
