import { GetFeedbacksSummaryRepository } from '@/infra/repositories'
import httpClient from '@/utils/helpers/httpClient'

export const makeGetFeedbacksSummaryRepository = () =>
  new GetFeedbacksSummaryRepository(httpClient)
