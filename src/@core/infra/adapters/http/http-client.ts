import { IHttpClientAdapter } from '@/@core/domain/adapters/http/http-client'
import axios, { AxiosResponse } from 'axios'

export class HttpClientAdapter implements IHttpClientAdapter {
  async request(
    data: IHttpClientAdapter.Request
  ): Promise<IHttpClientAdapter.Response<any>> {
    try {
      const response: AxiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params
      })
      return response.data
    } catch {
      throw new Error('erro ao tentar fazer login')
    }
  }
}
