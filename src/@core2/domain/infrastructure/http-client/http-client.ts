export interface HttpClient<T = any> {
  request: (data: HttpClient.Request) => Promise<HttpClient.Reponse>
}

export namespace HttpClient {
  export type Request = {
    body?: any
    headers?: any
    method: HttpClient.Method
    params?: Record<string, string | number | boolean>
    url: string
  }

  export type Method = 'get' | 'post' | 'put' | 'delete'

  export type Reponse<T = any> = {
    body?: T
    statusCode: HttpClient.StatusCode
  }

  export enum StatusCode {
    ok = 200,
    created = 201,
    unauthorized = 401,
    notFound = 404,
    serverError = 500
  }
}
