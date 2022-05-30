import { AxiosInstance } from 'axios'

export type LoginDTO = string | null

export class TokenGeneratorRepository {
  private tokenGeneratorRoute = '/auth/login'

  constructor(private httpClient: AxiosInstance) {
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
