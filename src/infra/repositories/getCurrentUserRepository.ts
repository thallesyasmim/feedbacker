import httpClient from '@/utils/helpers/httpClient'
import { AxiosInstance } from 'axios'
import { IUser } from '@/types'

export class GetCurrentUserRepository {
  private httpClient: AxiosInstance
  private getCurrentUserRoute = 'users/me'

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async get(): Promise<IUser> {
    const response = await this.httpClient.get(this.getCurrentUserRoute)
    return response?.data ?? null
  }
}

export class GetCurrentUserRepositoryFactory {
  static getInstance() {
    return new GetCurrentUserRepository(httpClient)
  }
}
