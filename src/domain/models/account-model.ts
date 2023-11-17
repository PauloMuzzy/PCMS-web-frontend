export type AccountModel = {
  isArray: boolean
  path: string
  duration: string
  method: string
  data: {
    accessToken: string
    refreshToken: string
    expiresIn: number
  }
}
