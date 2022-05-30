import { GenerateApiKeyUseCase } from '@/domain/usecases/generateApiKeyUseCase'

export function useGenerateApiKey(
  generateApiKeyUseCase: GenerateApiKeyUseCase
) {
  async function handleApiKey() {
    return await generateApiKeyUseCase.generate()
  }

  return {
    handleApiKey,
  }
}
