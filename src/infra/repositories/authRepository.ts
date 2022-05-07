import { AxiosInstance } from 'axios'

export class AuthRepository {
  private httpClient: AxiosInstance
  private authLoginRoute = 'auth/login'

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async login(email: string, password: string) {
    try {
      const {
        data: { token },
      } = await this.httpClient.post(this.authLoginRoute, {
        email,
        password,
      })

      return token
    } catch (error) {
      console.error(error)
    }
  }
}
