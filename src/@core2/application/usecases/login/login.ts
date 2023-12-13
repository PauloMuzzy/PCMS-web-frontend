import {
  LoginRequestDTO,
  LoginResponseDTO
} from '@/@core2/domain/DTO/login/login'
import { Login } from '@/@core2/domain/application/login/login'
import { SaveLocalAuthToken } from '@/@core2/domain/application/login/save-local-auth-token'
import { HttpClient } from '@/@core2/domain/infrastructure/http-client/http-client'
import { NotFoundError } from '@/errors/serverError/notFound'
import { ServerError } from '@/errors/serverError/serverError'

export class LoginUseCase implements Login {
  private readonly httpClient: HttpClient<LoginResponseDTO>
  private readonly url: string
  private readonly saveAuthToken: SaveLocalAuthToken

  constructor(
    httpClient: HttpClient<LoginResponseDTO>,
    url: string,
    saveAuthToken: SaveLocalAuthToken
  ) {
    this.httpClient = httpClient
    this.url = url
    this.saveAuthToken = saveAuthToken
  }

  async login(payload: LoginRequestDTO): Promise<LoginResponseDTO> {
    const { body, statusCode } = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: payload
    })

    switch (statusCode) {
      case HttpClient.StatusCode.created:
        this.saveAuthToken.save({
          key: 'auth-token',
          value: body.accessToken
        })
      case HttpClient.StatusCode.notFound:
        throw new NotFoundError()
      case HttpClient.StatusCode.serverError:
        throw new ServerError()
    }

    return body
  }
}
