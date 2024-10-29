import logo from '../assets/logo.png'
import backgroundImage from '../assets/fundo.png'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import toast, { LoaderIcon } from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import type { LoginParams } from '../services/auth/login'
import auth from '../services/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'O e-mail deve conter no mínimo 1 caracter' })
    .email('Email inválido'),
  password: z
    .string()
    .min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
})

type FormData = z.infer<typeof loginSchema>

export function Login() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: LoginParams) => {
      return auth.login(data)
    },
  })

  const { login } = useAuth()

  const handleSubmit = hookFormSubmit(async data => {
    try {
      const { accessToken } = await mutateAsync(data)

      login(accessToken)
    } catch {
      toast.error('Credenciais inválidas!')
    }
  })

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-12 h-screen">
      <div className="flex justify-center items-center md:col-span-5 text-center">
        <form className="p-4 w-96" onSubmit={handleSubmit}>
          <img
            src={logo}
            alt="Logo do aplicativo agendei"
            className="mx-auto mb-4 w-[170px]"
          />

          <h5 className="mb-5">
            Gerencie seus agendamentos de forma descomplicada.
          </h5>
          <h5 className="mb-4 text-zinc-500 dark:text-zinc-400">
            Acesse sua conta
          </h5>

          <div className="flex flex-col gap-2 space-y-2">
            <Input type="email" placeholder="E-mail" {...register('email')} />
            <Input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
          </div>

          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}

          <div className="mt-3 mb-5">
            <Button
              className="bg-blue-600 p-2.5 rounded-md w-full"
              type="submit"
              size="lg"
              disabled={isPending}
            >
              {isPending ? <LoaderIcon /> : 'Login'}
            </Button>
          </div>

          <div>
            <span className="mr-1">Não tenho uma conta.</span>
            <Link to="/register" className="text-blue-500 underline">
              Criar agora!
            </Link>
          </div>
        </form>
      </div>

      <div className="md:col-span-7 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Imagem de fundo de um médico agendando uma consulta"
          className="object-left w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
