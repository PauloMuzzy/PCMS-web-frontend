import { CookieClient } from '@/@core2/domain/infrastructure/cookie-client/cookie-client'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'

export class CookiesNextClient implements CookieClient {
  get({ key }: CookieClient.GetParams) {
    const cookie = getCookie(key)
    return cookie ? String(cookie) : undefined
  }

  remove({ key }: CookieClient.RemoveParams) {
    deleteCookie(key)
  }

  save({ key, value }: CookieClient.SetParams) {
    setCookie(key, value)
  }
}
