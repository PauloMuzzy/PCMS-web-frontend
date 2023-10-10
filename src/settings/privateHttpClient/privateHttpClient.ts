import { ENDPOINT } from '@/settings'
import axios from 'axios'

export const privateHttpClient = axios.create({
  baseURL: ENDPOINT,
  timeout: 3000,
  headers: {
    token: 'token'
  }
})
