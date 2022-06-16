import { AuthUseCase } from '@/domain/usecases/authUseCase'
import { CreateAccountDTO } from '@/infra/repositories'
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '@/utils/helpers/validators'

export function useCreateAccount(authUseCase: AuthUseCase) {
  const validationRules = {
    name: nameValidator(),
    email: emailValidator(),
    password: passwordValidator(),
  }

  async function handleCreateAccount({
    name,
    email,
    password,
  }: CreateAccountDTO) {
    return await authUseCase.register({ name, email, password })
  }

  return {
    validationRules,
    handleCreateAccount,
  }
}
