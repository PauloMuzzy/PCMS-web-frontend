import { ENDPOINT } from '@/settings'
import axios from 'axios'

export const httpClient = axios.create({
  baseURL: ENDPOINT,
  timeout: 5000,
  headers: {}
})
