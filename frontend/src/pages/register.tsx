import logo from '../assets/logo.png'
import backgroundImage from '../assets/fundo.png'
import { Link } from 'react-router-dom'

export function Register() {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col gap-4 h-screen">
      <div className="md:col-span-5 text-center flex items-center justify-center">
        <form className="w-96 p-4">
          <img
            src={logo}
            alt="Logo do aplicativo agendei"
            className="mx-auto w-[170px] mb-4"
          />

          <h5 className="mb-5">Crie sua conta agora mesmo.</h5>
          <h5 className="mb-4 dark:text-zinc-400 text-zinc-300">
            Preencha os campos abaixo
          </h5>

          <div className="flex gap-2 flex-col space-y-2">
            <input
              type="text"
              placeholder="Nome"
              className="p-2.5 rounded-md dark:bg-zinc-700 text-zinc-100 focus:outline-none ring-0"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="p-2.5 rounded-md dark:bg-zinc-700 text-zinc-100 focus:outline-none ring-0"
            />

            <input
              type="password"
              placeholder="Senha"
              className="p-2.5 rounded-md dark:bg-zinc-700 text-zinc-100 focus:outline-none ring-0"
            />

            <input
              type="password"
              placeholder="Confirme a senha"
              className="p-2.5 rounded-md dark:bg-zinc-700 text-zinc-100 focus:outline-none ring-0"
            />
          </div>

          <div className="mt-3 mb-5">
            <button
              className="rounded-md p-2.5 bg-blue-600 w-full"
              type="submit"
            >
              Criar minha conta
            </button>
          </div>

          <div>
            <span className="mr-1">Já tenho uma conta.</span>
            <Link to="/login" className="text-blue-500 underline">
              Acessar agora!
            </Link>
          </div>
        </form>
      </div>

      <div className="md:col-span-7 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Imagem de fundo de um médico agendando uma consulta"
          className="object-cover w-full h-full object-left"
        />
      </div>
    </div>
  )
}
