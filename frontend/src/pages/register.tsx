import logo from '../assets/logo.png'
import backgroundImage from '../assets/fundo.png'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import auth from '../services/auth'
import type { RegisterParams } from '../services/auth/register'
import toast from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const registerSchema = z
  .object({
    name: z.string().min(1, 'Digite seu nome'),
    email: z.string().min(1, 'Digite seu email').email('Email inválido'),
    password: z.string().min(4, 'Senha deve ter pelo menos 4 caracteres'),
    confirmPassword: z.string().min(4),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof registerSchema>

export function Register() {
  const { handleSubmit: hookFormSubmit, register } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  })

  const { mutateAsync } = useMutation({
    mutationFn: async (data: RegisterParams) => {
      return auth.register(data)
    },
  })

  const { login } = useAuth()

  const handleSubmit = hookFormSubmit(async data => {
    try {
      const { accessToken } = await mutateAsync(data)

      login(accessToken)

      toast.success('Conta criada com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao criar sua conta!')
    }
  })

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-12 h-screen">
      <div className="flex flex-col justify-center items-center md:col-span-5 text-center">
        <img
          src={logo}
          alt="Logo do aplicativo agendei"
          className="mx-auto mb-4 w-[170px]"
        />

        <h5 className="mb-5">Crie sua conta agora mesmo.</h5>
        <h5 className="mb-4 text-zinc-400">Preencha os campos abaixo</h5>

        <form onSubmit={handleSubmit} className="p-4 w-96">
          <div className="flex flex-col gap-2 space-y-2">
            <Input type="text" placeholder="Nome" {...register('name')} />
            <Input type="email" placeholder="E-mail" {...register('email')} />

            <Input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />

            <Input
              type="password"
              placeholder="Confirme a senha"
              {...register('confirmPassword')}
            />
          </div>

          <div className="mt-6 mb-5">
            <Button size="lg" type="submit">
              Criar minha conta
            </Button>
          </div>
        </form>

        <div>
          <span className="mr-1">Já tenho uma conta.</span>
          <Link to="/login" className="text-blue-500 underline">
            Acessar agora!
          </Link>
        </div>
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
