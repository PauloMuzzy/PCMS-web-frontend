import { BACKEND_LOGIN_V1, httpClient } from '@/settings'

type Params = {
  email: string
  password: string
}

type UserLoginResponse = {
  data: Data
  isArray: boolean
  path: string
  duration: string
  method: string
}

export type Data = {
  accessToken: string
  expiresIn: string
  refreshToken: string
}

export async function userLogin(params: Params) {
  try {
    const { data } = await httpClient.post<UserLoginResponse>(
      BACKEND_LOGIN_V1,
      params
    )
    return data
  } catch (error) {
    throw error
  }
}
