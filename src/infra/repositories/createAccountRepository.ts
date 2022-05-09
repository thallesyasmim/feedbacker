import httpClient from '@/utils/helpers/httpClient'
import { AxiosInstance } from 'axios'

export interface CreateAccountDTO {
  name: string
  email: string
  password: string
}

export class CreateAccountRepository {
  private httpClient: AxiosInstance
  private createAccountRoute = 'auth/register'

  constructor(httpClient: AxiosInstance) {
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

export class CreateAccountRepositoryFactory {
  static getInstance() {
    return new CreateAccountRepository(httpClient)
  }
}
