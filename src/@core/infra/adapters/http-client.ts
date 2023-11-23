import { IHttpClientAdapter } from '@/@core/domain/adapters/http-client'
import axios from 'axios'

export class HttpClientAdapter implements IHttpClientAdapter {
  async post<Req, Res>(url: string, body: Req): Promise<Res> {
    return await axios.post(url, body)
  }
}
