import { httpClient } from '../httpClient'

export interface RegisterParams {
  name: string
  email: string
  password: string
}

interface RegisterResponse {
  accessToken: string
}

export async function register(params: RegisterParams) {
  const { data } = await httpClient.post<RegisterResponse>(
    '/users/register',
    params
  )

  return data
}
