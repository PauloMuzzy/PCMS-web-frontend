export interface IHttpClientAdapter {
  request: (
    data: IHttpClientAdapter.Request
  ) => Promise<IHttpClientAdapter.Response>
}

export namespace IHttpClientAdapter {
  export type Request = {
    body?: any
    headers?: any
    method: Method
    params?: Record<string, string | number | boolean>
    url: string
  }

  export type Method = 'get' | 'post' | 'put' | 'delete'

  export type Response<T = any> = T
}
