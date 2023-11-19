import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '../../../data'
import {
  AccountModel,
  AuthenticationParams,
  InvalidCredentialsError,
  UnexpectedError
} from '../../../domain'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
