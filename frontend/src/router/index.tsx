import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthGuard } from './auth-guard'
import { Login } from '../pages/login'
import { Appointments } from '../pages/appointments'
import { Register } from '../pages/register'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthGuard isPrivate={false}>
              <Login />
            </AuthGuard>
          }
        />

        <Route
          path="/register"
          element={
            <AuthGuard isPrivate={false}>
              <Register />
            </AuthGuard>
          }
        />

        <Route
          path="/"
          element={
            <AuthGuard isPrivate>
              <Appointments />
            </AuthGuard>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
