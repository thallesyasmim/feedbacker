import { email, helpers, minLength, required } from '@vuelidate/validators'

interface UseLoginDTO {
  validationRules: any
  handleSubmit: () => Promise<string>
}

export function useLogin(): UseLoginDTO {
  const validationRules = {
    email: {
      required: helpers.withMessage('O e-mail é requerido', required),
      email: helpers.withMessage('O e-mail é inválido', email),
    },
    password: {
      required: helpers.withMessage('A senha é requerida', required),
      minLength: helpers.withMessage(
        'A senha deve ter pelo menos 3 caracteres',
        minLength(3)
      ),
    },
  }

  async function handleSubmit() {
    return ''
  }

  return {
    validationRules,
    handleSubmit,
  }
}
