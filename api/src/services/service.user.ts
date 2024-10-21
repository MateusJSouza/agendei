import bcrypt from 'bcrypt'
import jwt from '../token'
import repositoryUser from '../repositories/repository.user'
import type { CreateUserProps } from '../types/create-user'

import dotenv from 'dotenv'

export interface IUser {
  id_user?: string
  name?: string
  password?: string
  token?: string
  user?: any
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

  if (!user) {
    return null
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    user.password as string
  )

  if (!isPasswordValid) {
    return null
  }

  delete user.password

  const token = jwt.createToken(user.id_user!)

  return { ...user, token }
}

export default {
  createUser,
  login,
}
