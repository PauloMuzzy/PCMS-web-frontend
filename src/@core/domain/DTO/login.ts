export interface MakeLoginResponseDTO {
  isArray: false
  path: string
  duration: string
  method: string
  data: {
    accessToken: string
    refreshToken: string
    expiresIn: number
  }
}

export interface DoLoginDTO {
  accessToken: string
}
