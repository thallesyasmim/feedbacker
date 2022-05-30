import { CreateAccountRepository } from '@/infra/repositories'
import httpClient from '@/utils/helpers/httpClient'

export const makeCreateAccountRepository = () =>
  new CreateAccountRepository(httpClient)
