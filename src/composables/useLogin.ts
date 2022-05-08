import { AuthUseCase } from '@/domain/usecases/authUseCase'
import { emailValidator, passwordValidator } from '@/utils/helpers/validators'

interface UseLoginDTO {
  validationRules: any
  handleLogin: (email: string, password: string) => Promise<string>
}

export function useLogin(authUseCase: AuthUseCase): UseLoginDTO {
  const validationRules = {
    email: emailValidator(),
    password: passwordValidator(),
  }

  async function handleLogin(email: string, password: string) {
    return await authUseCase.login(email, password)
  }

  return {
    validationRules,
    handleLogin,
  }
}
