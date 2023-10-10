import { BACKEND_ISAUTHENTICATED_V1, httpClient } from '@/settings'

export async function authentication(token: string) {
  try {
    const { data } = await httpClient.get<any>(BACKEND_ISAUTHENTICATED_V1, {
      headers: { token }
    })
    return data
  } catch (error) {
    throw error
  }
}
