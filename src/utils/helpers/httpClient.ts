import axios from 'axios'
import router from '@/router'
import { setGlobalLoading } from '@/store/global'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:3333',
})

httpClient.interceptors.request.use((config) => {
  setGlobalLoading(true)
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
  (response) => {
    setGlobalLoading(false)
    return response
  },
  (error) => {
    const {
      response: { status },
    } = error

    if (status === 0 || status === 500) {
      setGlobalLoading(false)
      throw new Error(error)
    }

    if (status === 401) {
      router.push({ name: 'Home' })
    }

    return error
  }
)

export default httpClient
