import { GetCurrentUserRepository } from '@/infra/repositories/getCurrentUserRepository'
import { IUser } from '@/types'

export class GetCurrentUserUseCase {
  private getCurrentUserRepository: GetCurrentUserRepository

  constructor(getCurrentUserRepository: GetCurrentUserRepository) {
    this.getCurrentUserRepository = getCurrentUserRepository
  }

  async get(): Promise<IUser> {
    return await this.getCurrentUserRepository.get()
  }
}
