import { HttpClient } from '@/@core2/domain/infrastructure/http-client/http-client'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient<T> implements HttpClient<T> {
  async request(data: HttpClient.Request): Promise<HttpClient.Reponse<T>> {
    try {
      const axiosResponse: AxiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params
      })

      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      }
    } catch (error) {}
  }
}
