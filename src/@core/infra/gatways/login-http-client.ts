import { DoLoginDTO, MakeLoginResponseDTO } from '@/@core/domain/DTO/login'
import { LoginGateway } from '@/@core/domain/gateways/login'
import { HttpClientAdapter } from '@/@core/infra/adapters/http-client'
import { AxiosResponse } from 'axios'

type RequestParam = {
  email: string
  password: string
}

type ResponseParam = {
  data: MakeLoginResponseDTO
} & AxiosResponse

export class LoginHttpGateway implements LoginGateway {
  constructor(private httpClientAdapter: HttpClientAdapter) {}

  async doLogin(email: string, password: string): Promise<DoLoginDTO> {
    const response = await this.httpClientAdapter.post<
      RequestParam,
      ResponseParam
    >(process.env.NEXT_PUBLIC_BASE_URL_PRD + '/v1/auth/login', {
      email,
      password
    })
    return { accessToken: response.data.data.accessToken }
  }
}
