import { TokenGeneratorRepository } from '@/infra/repositories'
import httpClient from '@/utils/helpers/httpClient'

export const makeTokenGeneratorRepository = () =>
  new TokenGeneratorRepository(httpClient)
