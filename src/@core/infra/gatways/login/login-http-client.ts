import {
  LoginRequestDTO,
  LoginResponseDTO
} from '@/@core/domain/DTO/login/login'
import { LoginGateway } from '@/@core/domain/gateways/login/login'

import { HttpClientAdapter } from '@/@core/infra/adapters/http/http-client'

export class LoginHttpGateway implements LoginGateway {
  constructor(private httpClientAdapter: HttpClientAdapter) {}
  async login(params: LoginRequestDTO): Promise<LoginResponseDTO> {
    const response = await this.httpClientAdapter.request({
      url: process.env.NEXT_PUBLIC_BASE_URL + '/v1/auth/login',
      method: 'post',
      body: params
    })
    return response
  }
}
