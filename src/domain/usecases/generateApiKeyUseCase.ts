import { GenerateApiKeyRepository } from '@/infra/repositories/generateApiKeyRepository'

export class GenerateApiKeyUseCase {
  constructor(private generateApiKeyRepository: GenerateApiKeyRepository) {}

  async generate() {
    const apiKey = await this.generateApiKeyRepository.generate()
    return apiKey
  }
}
