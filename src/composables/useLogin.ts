import { emailValidator, passwordValidator } from '@/utils/helpers/validators'

interface UseLoginDTO {
  validationRules: any
  handleSubmit: () => Promise<string>
}

export function useLogin(): UseLoginDTO {
  const validationRules = {
    email: emailValidator(),
    password: passwordValidator(),
  }

  async function handleSubmit() {
    return ''
  }

  return {
    validationRules,
    handleSubmit,
  }
}
