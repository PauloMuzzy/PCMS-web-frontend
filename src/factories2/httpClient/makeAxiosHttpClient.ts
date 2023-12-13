import { HttpClient } from '@/@core2/domain/infrastructure/http-client/http-client'
import { AxiosHttpClient } from '@/@core2/infrastructure/http-client/axios-http-client/axios-http-client'

export function MakeAxiosHttpClient<T>(): HttpClient<T> {
  return new AxiosHttpClient<T>()
}
