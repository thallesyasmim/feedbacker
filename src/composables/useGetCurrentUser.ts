import { GetCurrentUserUseCase } from '@/domain/usecases/getCurrentUserUseCase'
import { IUser } from '@/types'

export function useGetCurrentUser(
  getCurrentUserUseCase: GetCurrentUserUseCase
) {
  async function handleGetCurrentUser(): Promise<IUser> {
    return await getCurrentUserUseCase.get()
  }

  return {
    handleGetCurrentUser,
  }
}
