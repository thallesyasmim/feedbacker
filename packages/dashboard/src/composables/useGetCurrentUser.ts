import { GetCurrentUserUseCase } from '@/domain/usecases/getCurrentUserUseCase'
import { IUser } from '@/domain/entities/User'

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
