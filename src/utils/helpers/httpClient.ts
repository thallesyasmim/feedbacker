import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3333',
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      response: { status },
    } = error

    if (status === 0 || status === 500) {
      throw new Error(error)
    }
  }
)

export default httpClient
