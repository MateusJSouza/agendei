import { Navbar } from './navbar'

export function Header() {
  return (
    <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between bg-zinc-800 p-[2em] uppercase backdrop-blur-[100px] dark:text-zinc-200 text-black">
      <Navbar />
    </header>
  )
}
