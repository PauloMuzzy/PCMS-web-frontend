export interface SaveLocalAuthToken {
  save: (params: SaveLocalAuthToken.Params) => void
}

export namespace SaveLocalAuthToken {
  export type Params = {
    key: string
    value: string
  }
}
