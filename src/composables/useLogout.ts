import { useRouter } from 'vue-router'

export function useLogout() {
  const router = useRouter()

  function handleLogout() {
    window.localStorage.removeItem('token')
    router.push({ name: 'Home' })
  }

  return {
    handleLogout,
  }
}
