import {
  LoginRequestDTO,
  LoginResponseDTO
} from '@/@core2/domain/DTO/login/login'

export interface Login {
  login(params: LoginRequestDTO): Promise<LoginResponseDTO>
}
