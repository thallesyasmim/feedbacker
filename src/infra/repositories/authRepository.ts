import httpClient from '@/utils/helpers/httpClient'
import { AxiosInstance } from 'axios'

export type LoginDTO = string | null

export class AuthRepository {
  private httpClient: AxiosInstance
  private authLoginRoute = '/auth/login'

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async login(email: string, password: string): Promise<LoginDTO> {
    const response = await this.httpClient.post(this.authLoginRoute, {
      email,
      password,
    })

    return response?.data?.token ?? null
  }
}

export class AuthRepositoryFactory {
  static getInstance() {
    return new AuthRepository(httpClient)
  }
}
