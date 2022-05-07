import { AuthRepository } from '@/infra/repositories/authRepository'

export class AuthUseCase {
  private authRepository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository
  }

  async login(email: string, password: string) {
    const token = await this.authRepository.login(email, password)

    return token
  }
}
