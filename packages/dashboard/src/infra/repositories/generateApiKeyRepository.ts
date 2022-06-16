import { AxiosInstance } from 'axios'

export class GenerateApiKeyRepository {
  constructor(private httpClient: AxiosInstance) {}

  async generate() {
    const { data } = await this.httpClient.post('/users/me/apikey')

    return data?.apiKey
  }
}
