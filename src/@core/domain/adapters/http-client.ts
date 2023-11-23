export interface IHttpClientAdapter {
  post<Req, Res>(url: string, body: Req): Promise<Res>
}
