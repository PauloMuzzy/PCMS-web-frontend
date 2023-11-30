import { RemoteLoginUseCase } from '@/@core/application/use-cases/login/remote-login'
import { LoginRequestDTO } from '@/@core/domain/DTO/login/login'
import { HttpClientAdapter } from '@/@core/infra/adapters/http/http-client'
import { SaveStorageAdapter } from '@/@core/infra/adapters/storage/save-storage'
import { RemoteStorageClienteGateway } from '@/@core/infra/gatways/auth-token/save-auth-token-storage'
import { LoginHttpGateway } from '@/@core/infra/gatways/login/login-http-client'

export const makeLogin = async ({ email, password }: LoginRequestDTO) => {
  return new RemoteLoginUseCase(
    new LoginHttpGateway(new HttpClientAdapter()),
    new RemoteStorageClienteGateway(new SaveStorageAdapter())
  ).execute({ email, password })
}
