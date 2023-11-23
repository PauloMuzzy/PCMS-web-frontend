import { DoLoginDTO } from '@/@core/domain/DTO/login'

export interface LoginGateway {
  doLogin(email: string, password: string): Promise<DoLoginDTO>
}
