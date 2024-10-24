import {
  createContext,
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { localStorageKeys } from '../configs/localStorageKeys'
import { LaunchScreen } from '../components/launch-screen'
import type { IUser } from '../entities/user'
import user from '../services/user'

interface AuthContextValue {
  isLoggedIn: boolean
  user: IUser | undefined
  login: (accessToken: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    )
    return !!storedAccessToken
  })

  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => user.profile(),
    enabled: isLoggedIn,
    staleTime: Number.POSITIVE_INFINITY,
  })

  const login = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken)
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN)
    setIsLoggedIn(false)
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!')
      logout()
    }
  }, [isError, logout])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isSuccess && isLoggedIn,
        user: data,
        login,
        logout,
      }}
    >
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  )
}
