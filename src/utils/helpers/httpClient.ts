import axios from 'axios'
import router from '@/router'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3333',
})

httpClient.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    }
  }

  return config
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

    if (status === 401) {
      router.push({ name: 'Home' })
    }

    return error
  }
)

export default httpClient
