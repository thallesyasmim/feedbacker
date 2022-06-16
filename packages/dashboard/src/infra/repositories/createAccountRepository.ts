import { AxiosInstance } from 'axios'

export interface CreateAccountDTO {
  name: string
  email: string
  password: string
}

export class CreateAccountRepository {
  private createAccountRoute = 'auth/register'

  constructor(private httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async create({ name, email, password }: CreateAccountDTO): Promise<any> {
    const response = await this.httpClient.post(this.createAccountRoute, {
      name,
      email,
      password,
    })

    return response?.data ?? null
  }
}
