import { Feedback, FeedbackType } from '@/domain/entities/Feedback'
import { AxiosInstance } from 'axios'

interface IFeedbackResponse {
  results: Feedback[]
  pagination: {
    offset: number
    limit: number
    total: number
  }
}

export interface IGetAllFeedbacksRepositoryProps {
  type?: FeedbackType
  limit: number
  offset: number
}

interface IGetAllFeedbacksRepository {
  get(queryParams: IGetAllFeedbacksRepositoryProps): Promise<IFeedbackResponse>
}

export class GetAllFeedbacksRepository implements IGetAllFeedbacksRepository {
  private path = '/feedbacks'

  constructor(private httpClient: AxiosInstance) {}

  async get(
    queryParams: IGetAllFeedbacksRepositoryProps
  ): Promise<IFeedbackResponse> {
    const { data } = await this.httpClient.get(this.path, {
      params: queryParams,
    })

    return data
  }
}
