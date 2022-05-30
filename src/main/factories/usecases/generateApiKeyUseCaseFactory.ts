import { GenerateApiKeyUseCase } from '@/domain/usecases/generateApiKeyUseCase'
import { makeGenerateApiKeyRepository } from '../repositories/generateApiKeyRepositoryFactory'

export const makeGenerateApiKeyUseCase = () => {
  const generateApiKeyRepository = makeGenerateApiKeyRepository()
  return new GenerateApiKeyUseCase(generateApiKeyRepository)
}
