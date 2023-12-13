import { LoginUseCase } from '@/@core2/application/usecases/login/login'
import {
  LoginRequestDTO,
  LoginResponseDTO
} from '@/@core2/domain/DTO/login/login'
import { CookiesNextClient } from '@/@core2/infrastructure/cookie-client/cookies-next-client/cookies-next-client'
import { MakeAxiosHttpClient } from '@/factories2/httpClient/makeAxiosHttpClient'

export const makeLogin = (
  makeLoginParams: LoginRequestDTO
): Promise<LoginResponseDTO> => {
  return new LoginUseCase(
    MakeAxiosHttpClient(),
    process.env.NEXT_PUBLIC_BASE_URL + '/v1/authi/login',
    new CookiesNextClient()
  ).login(makeLoginParams)
}
