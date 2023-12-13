export interface CookieClient {
  get: (params: CookieClient.Params) => string | undefined
  remove: (removeParams: CookieClient.RemoveParams) => void
  save: (setParams: CookieClient.SetParams) => void
}

export namespace CookieClient {
  export type GetParams = Params

  export type RemoveParams = Params

  export type SetParams = {
    value: string
  } & Params

  export type Params = {
    key: string
  }
}
