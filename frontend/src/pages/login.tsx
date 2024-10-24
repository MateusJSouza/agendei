import logo from '../assets/logo.png'
import backgroundImage from '../assets/fundo.png'

export function Login() {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col gap-4 h-screen">
      <div className="md:col-span-5 text-center flex items-center justify-center">
        <form className="w-96 p-4">
          <img
            src={logo}
            alt="Logo do aplicativo agendei"
            className="mx-auto w-[170px] mb-4"
          />

          <h5 className="mb-5">
            Gerencie seus agendamentos de forma descomplicada.
          </h5>
          <h5 className="mb-4 dark:text-zinc-400 text-zinc-300">
            Acesse sua conta
          </h5>

          <div className="flex gap-2 flex-col space-y-2">
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
          </div>

          <div className="mt-3 mb-5">
            <button
              className="rounded-md p-2.5 bg-blue-600 w-full"
              type="submit"
            >
              Login
            </button>
          </div>

          <div>
            <span className="mr-1">Não tenho uma conta.</span>
            <a href="/register" className="text-blue-500 underline">
              Criar agora!
            </a>
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
