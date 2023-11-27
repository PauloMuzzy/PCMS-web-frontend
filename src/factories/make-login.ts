import { DoLoginUseCase } from '@/@core/application/use-cases/login'
import { HttpClientAdapter } from '@/@core/infra/adapters/http-client'
import { StorageAdapter } from '@/@core/infra/adapters/storage'
import { LoginHttpGateway } from '@/@core/infra/gatways/login-http-client'
import { StorageClienteGateway } from '@/@core/infra/gatways/storage-client'

export const makeLogin = async (email: string, password: string) => {
  const useCase = new DoLoginUseCase(
    new LoginHttpGateway(new HttpClientAdapter()),
    new StorageClienteGateway(new StorageAdapter())
  )
  return await useCase.execute(email, password)
}
