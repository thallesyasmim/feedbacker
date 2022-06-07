import { FeedbacksUseCase } from '@/domain/usecases/feedbacksUseCase'
import { IGetAllFeedbacksRepositoryProps } from '@/infra/repositories'
import { Feedback } from '@/domain/entities/Feedback'

interface IHandleFeedbacks {
  results: Feedback[]
  pagination: {
    offset: number
    limit: number
    total: number
  }
}

export function useFeedbacks(feedbacksUseCase: FeedbacksUseCase) {
  async function handleFeedbacks(
    queryParams: IGetAllFeedbacksRepositoryProps
  ): Promise<IHandleFeedbacks> {
    const feedbacks = await feedbacksUseCase.getAll({
      ...queryParams,
      type:
        queryParams.type?.toLocaleLowerCase() === 'all'
          ? undefined
          : queryParams.type,
    })
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
