import { LoginRequestDTO } from '@/@core/domain/DTO/login/login'
import { SaveLocalAuthTokenGateway } from '@/@core/domain/gateways/auth-token/save-auth-token'
import { LoginGateway } from '@/@core/domain/gateways/login/login'

export class RemoteLoginUseCase {
  constructor(
    private loginGateway: LoginGateway,
    private saveAuthTokenGateway: SaveLocalAuthTokenGateway
  ) {}

  async execute(params: LoginRequestDTO): Promise<void> {
    const { accessToken } = await this.loginGateway.login(params)
    this.saveAuthTokenGateway.save(accessToken)
  }
}
