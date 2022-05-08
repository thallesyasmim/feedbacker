import { httpClient } from '@/utils/helpers/httpClient'
import { AxiosInstance } from 'axios'

export class AuthRepository {
  private httpClient: AxiosInstance
  private authLoginRoute = '/auth/login'

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async login(email: string, password: string) {
    const {
      data: { token },
    } = await this.httpClient.post(this.authLoginRoute, {
      email,
      password,
    })

    return token
  }
}

export class AuthRepositoryFactory {
  static getInstance() {
    return new AuthRepository(httpClient)
  }
}
