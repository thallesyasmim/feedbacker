import { email, helpers, minLength, required } from '@vuelidate/validators'

export const requiredValidator = () =>
  helpers.withMessage('Este campo é requerido', required)

export const emailValidator = () => ({
  required: requiredValidator(),
  email: helpers.withMessage('O e-mail é inválido', email),
})

export const passwordValidator = () => ({
  required: requiredValidator(),
  minLength: helpers.withMessage(
    'A senha deve ter pelo menos 3 caracteres',
    minLength(3)
  ),
})
