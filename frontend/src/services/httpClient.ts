import axios from 'axios'

export const httpClient = axios.create({
  baseURL: import.meta.env.API_URL,
})
