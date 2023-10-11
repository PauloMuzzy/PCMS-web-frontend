import { ENDPOINT } from '@/settings'
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
const token = cookies.get('auth_token')

export const privateHttpClient = axios.create({
  baseURL: ENDPOINT,
  timeout: 5000,
  headers: {authorization : `Bearer ${token}`}
})
