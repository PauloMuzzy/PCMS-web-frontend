import {
  LoginRequestDTO,
  LoginResponseDTO
} from '@/@core/domain/DTO/login/login'

export interface LoginGateway {
  login(params: LoginRequestDTO): Promise<LoginResponseDTO>
}
