import { HttpPostParams } from '@/data'
import axios from 'axios'

export class AxiosHttpClient {
  async post(params: HttpPostParams<any>): Promise<void> {
    await axios.post(params.url)
  }
}
