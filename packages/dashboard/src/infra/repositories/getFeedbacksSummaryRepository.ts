import { AxiosInstance } from 'axios'

interface IFeedbackResponse {
  all: number
  issue: number
  idea: number
  other: number
}

interface IGetFeedbacksSummaryRepository {
  get(): Promise<IFeedbackResponse>
}

export class GetFeedbacksSummaryRepository
  implements IGetFeedbacksSummaryRepository
{
  private path = '/feedbacks/summary'

  constructor(private httpClient: AxiosInstance) {}

  async get(): Promise<IFeedbackResponse> {
    const { data } = await this.httpClient.get(this.path)

    return data
  }
}
