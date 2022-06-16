import { FeedbacksUseCase } from '@/domain/usecases/feedbacksUseCase'
import { makeGetAllFeedbacksRepository } from '../repositories/getAllFeedbacksRepositoryFactory'
import { makeGetFeedbacksSummaryRepository } from '../repositories/getFeedbacksSummaryRepositoryFactory'

export const makeFeedbacksUseCaseFactory = () => {
  const getAllFeedbacksRepository = makeGetAllFeedbacksRepository()
  const getFeedbacksSummaryRepository = makeGetFeedbacksSummaryRepository()

  return new FeedbacksUseCase({
    getAllFeedbacksRepository,
    getFeedbacksSummaryRepository,
  })
}
