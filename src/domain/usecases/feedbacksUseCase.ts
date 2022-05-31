import {
  GetAllFeedbacksRepository,
  GetFeedbacksSummaryRepository,
  IGetAllFeedbacksRepositoryProps,
} from '@/infra/repositories'

interface IFeedbacksUseCaseProps {
  getAllFeedbacksRepository: GetAllFeedbacksRepository
  getFeedbacksSummaryRepository: GetFeedbacksSummaryRepository
}

export class FeedbacksUseCase {
  private getAllFeedbacksRepository: GetAllFeedbacksRepository
  private getFeedbacksSummaryRepository: GetFeedbacksSummaryRepository

  constructor({
    getAllFeedbacksRepository,
    getFeedbacksSummaryRepository,
  }: IFeedbacksUseCaseProps) {
    this.getAllFeedbacksRepository = getAllFeedbacksRepository
    this.getFeedbacksSummaryRepository = getFeedbacksSummaryRepository
  }

  async getAll(queryParams: IGetAllFeedbacksRepositoryProps) {
    const feedbacks = await this.getAllFeedbacksRepository.get(queryParams)
    return feedbacks
  }

  async getSummary() {
    const feedbacksSummary = await this.getFeedbacksSummaryRepository.get()
    return feedbacksSummary
  }
}
