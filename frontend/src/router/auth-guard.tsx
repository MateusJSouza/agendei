import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { ReactNode } from 'react'

interface AuthGuardProps {
  isPrivate: boolean
  children: ReactNode
}

export function AuthGuard({ isPrivate, children }: AuthGuardProps) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (!isLoggedIn && isPrivate) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (isLoggedIn && !isPrivate) {
    return <Navigate to="/" replace />
  }

  return children
}
