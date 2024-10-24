import bcrypt from 'bcrypt'
import jwt from '../token'
import repositoryUser from '../repositories/repository.user'
import type { CreateUserProps } from '../types/create-user'

import dotenv from 'dotenv'

export interface User {
  id_user: string
  name: string
  email: string
  password?: string // Opcional, pois a senha é removida em algumas operações
}

export interface IUser {
  id_user: string
  name: string
  email: string
  token?: string
  user?: User
}

dotenv.config()

async function createUser({ name, email, password }: CreateUserProps) {
  const hashPassword = await bcrypt.hash(password, 10)

  const user = await repositoryUser.createUser({
    name,
    email,
    password: hashPassword,
  })

  const token = jwt.createToken(user.id_user.toString())

  return { id_user: user.id_user, token }
}

async function login(
  email: string,
  password: string | Buffer
): Promise<IUser | null> {
  const user = await repositoryUser.findUserByEmail(email)

  if (!user || !user.password) {
    return null
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return null
    }

    const { password: _, ...userWithoutPassword } = user

    const token = jwt.createToken(user.id_user)

    return { ...userWithoutPassword, token }
  } catch (error) {
    console.error('Erro ao comparar senhas:', error)
    return null
  }
}

async function profile(id_user: string) {
  const user = await repositoryUser.profile(id_user)

  return user
}

export default {
  createUser,
  login,
  profile,
}
