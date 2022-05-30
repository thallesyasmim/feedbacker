import { GetCurrentUserRepository } from '@/infra/repositories/getCurrentUserRepository'
import { IUser } from '@/domain/entities/User'

export class GetCurrentUserUseCase {
  private getCurrentUserRepository: GetCurrentUserRepository

  constructor(getCurrentUserRepository: GetCurrentUserRepository) {
    this.getCurrentUserRepository = getCurrentUserRepository
  }

  async get(): Promise<IUser> {
    return await this.getCurrentUserRepository.get()
  }
}
