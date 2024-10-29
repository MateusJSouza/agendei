import { Link, NavLink } from 'react-router-dom'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  mobileNavContainerVariant,
  mobileNavExitProps,
  mobileNavListVariant,
} from '../data/animate-config'
import { ModeToggle } from './mode-toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const activeClassName = 'selected navlink'
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : 'navlink'

const NavLinks = () => {
  return (
    <>
      <NavLink to="/appointments" className={activeStyleCallback}>
        Agendamentos
      </NavLink>
      <NavLink to="/services" className={activeStyleCallback}>
        Serviços
      </NavLink>
    </>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleNavbar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="flex flex-1 justify-between items-center px-8 py-4 overflow-hidden">
        <div className="md:flex justify-end gap-4 hidden">
          <NavLinks />
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger>Heber Stein Mazutti</DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Meu perfil</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/login">Desconectar</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex justify-end md:hidden w-[75px]">
          <button type="button" onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center md:hidden mt-4 basis-full"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/appointments" className={activeStyleCallback}>
                Agendamentos
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/services" className={activeStyleCallback}>
                Serviços
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
