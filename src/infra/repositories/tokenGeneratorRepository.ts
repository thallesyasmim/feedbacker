import httpClient from '@/utils/helpers/httpClient'
import { AxiosInstance } from 'axios'

export type LoginDTO = string | null

export class TokenGeneratorRepository {
  private httpClient: AxiosInstance
  private tokenGeneratorRoute = '/auth/login'

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async generate(email: string, password: string): Promise<LoginDTO> {
    const response = await this.httpClient.post(this.tokenGeneratorRoute, {
      email,
      password,
    })

    return response?.data?.token ?? null
  }
}

export class TokenGeneratorRepositoryFactory {
  static getInstance() {
    return new TokenGeneratorRepository(httpClient)
  }
}
