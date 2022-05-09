import {
  TokenGeneratorRepository,
  TokenGeneratorRepositoryFactory,
  CreateAccountRepository,
  CreateAccountRepositoryFactory,
  CreateAccountDTO,
  LoginDTO,
} from '@/infra/repositories'

export class AuthUseCase {
  private tokenGeneratorRepository: TokenGeneratorRepository
  private createAccountRepository: CreateAccountRepository

  constructor(
    tokenGeneratorRepository: TokenGeneratorRepository,
    createAccountRepository: CreateAccountRepository
  ) {
    this.tokenGeneratorRepository = tokenGeneratorRepository
    this.createAccountRepository = createAccountRepository
  }

  async login(email: string, password: string): Promise<LoginDTO> {
    const token = await this.tokenGeneratorRepository.generate(email, password)

    return token
  }

  async register({ name, email, password }: CreateAccountDTO): Promise<any> {
    const account = await this.createAccountRepository.create({
      name,
      email,
      password,
    })

    return account
  }
}

export class AuthUseCaseFactory {
  static getInstance() {
    return new AuthUseCase(
      TokenGeneratorRepositoryFactory.getInstance(),
      CreateAccountRepositoryFactory.getInstance()
    )
  }
}
