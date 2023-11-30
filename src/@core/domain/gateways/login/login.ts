import { LoginResponseDTO } from '@/@core/domain/DTO/login/login'

export interface LoginGateway {
  doLogin(email: string, password: string): Promise<LoginResponseDTO>
}
