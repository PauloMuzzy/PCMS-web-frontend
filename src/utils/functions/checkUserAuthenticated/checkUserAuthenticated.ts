import { authentication } from '@/services'
import Cookies from 'universal-cookie'

export const checkUserAuthenticated = async () => {
  const cookies = new Cookies()
  const auth_token = cookies.get('auth_token')

  try {
    const response = await authentication(auth_token)
    if (response) return true
  } catch (error) {
    return false
  }
}
