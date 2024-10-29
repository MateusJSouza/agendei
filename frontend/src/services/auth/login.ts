import { httpClient } from '../httpClient'

export interface LoginParams {
  email: string
  password: string
}

interface LoginResponse {
  accessToken: string
}

export async function login(params: LoginParams) {
  const { data } = await httpClient.post<LoginResponse>('/users/login', params)

  return data
}
