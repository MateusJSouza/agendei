import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/login'
import { Appointments } from '../pages/appointments'
import { Register } from '../pages/register'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Services } from '../pages/services'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { localStorageKeys } from '@/configs/localStorageKeys'

export function Router() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        defaultTheme="dark"
        storageKey={localStorageKeys.ACCESS_TOKEN}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
