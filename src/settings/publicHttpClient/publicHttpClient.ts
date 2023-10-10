import { ENDPOINT } from '@/settings'
import axios from 'axios'

export const httpClient = axios.create({
  baseURL: ENDPOINT,
  timeout: 3000,
  headers: {}
})
