import { GetAllFeedbacksRepository } from '@/infra/repositories'
import httpClient from '@/utils/helpers/httpClient'

export const makeGetAllFeedbacksRepository = () =>
  new GetAllFeedbacksRepository(httpClient)
