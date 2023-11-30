import { LoginUseCase } from '@/@core/application/use-cases/login/login'
import { HttpClientAdapter } from '@/@core/infra/adapters/http/http-client'
import { SaveStorageAdapter } from '@/@core/infra/adapters/storage/save-storage'
import { RemoteStorageClienteGateway } from '@/@core/infra/gatways/auth-token/save-auth-token-storage'
import { LoginHttpGateway } from '@/@core/infra/gatways/login/login-http-client'

export const makeLogin = async (email: string, password: string) => {
  const useCase = new LoginUseCase(
    new LoginHttpGateway(new HttpClientAdapter()),
    new RemoteStorageClienteGateway(new SaveStorageAdapter())
  )
  return await useCase.execute({ email, password })
}
