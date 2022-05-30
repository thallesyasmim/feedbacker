import { makeGenerateApiKeyUseCase } from '../usecases/generateApiKeyUseCaseFactory'
import { useGenerateApiKey as useGenerateApiKeyComposable } from '@/composables/useGenerateApiKey'

export const useGenerateApiKey = () => {
  const generateApiKeyUseCase = makeGenerateApiKeyUseCase()
  return useGenerateApiKeyComposable(generateApiKeyUseCase)
}
