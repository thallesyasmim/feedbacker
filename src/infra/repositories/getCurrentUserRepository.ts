import { AxiosInstance } from 'axios'
import { IUser } from '@/types'

export class GetCurrentUserRepository {
  private getCurrentUserRoute = 'users/me'

  constructor(private httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async get(): Promise<IUser> {
    const response = await this.httpClient.get(this.getCurrentUserRoute)
    return response?.data ?? null
  }
}
