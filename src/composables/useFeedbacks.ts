import { FeedbacksUseCase } from '@/domain/usecases/feedbacksUseCase'
import { IGetAllFeedbacksRepositoryProps } from '@/infra/repositories'

export function useFeedbacks(feedbacksUseCase: FeedbacksUseCase) {
  async function handleFeedbacks(queryParams: IGetAllFeedbacksRepositoryProps) {
    const feedbacks = await feedbacksUseCase.getAll(queryParams)
    return feedbacks
  }

  async function handleFeedbacksSummary() {
    const feedbacksSummary = await feedbacksUseCase.getSummary()
    return feedbacksSummary
  }

  return {
    handleFeedbacks,
    handleFeedbacksSummary,
  }
}
