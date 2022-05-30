import { GenerateApiKeyRepository } from '@/infra/repositories/generateApiKeyRepository'
import httpClient from '@/utils/helpers/httpClient'

export const makeGenerateApiKeyRepository = () =>
  new GenerateApiKeyRepository(httpClient)
