import { LoginGateway } from '@/@core/domain/gateways/login/login'
import { StorageClient } from '@/@core/domain/gateways/storage/storage-client'

export class DoLoginUseCase {
  constructor(
    private loginGateway: LoginGateway,
    private storageClient: StorageClient
  ) {}

  async execute(email: string, password: string): Promise<void> {
    const { accessToken } = await this.loginGateway.doLogin(email, password)
    this.storageClient.saveToken(accessToken)
  }
}
