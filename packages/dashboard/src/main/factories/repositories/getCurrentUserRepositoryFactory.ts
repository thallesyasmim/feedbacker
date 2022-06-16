import { GetCurrentUserRepository } from '@/infra/repositories/getCurrentUserRepository'
import httpClient from '@/utils/helpers/httpClient'

export const makeGetCurrentUserRepository = () =>
  new GetCurrentUserRepository(httpClient)
