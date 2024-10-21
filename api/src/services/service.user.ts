import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import repositoryUser from '../repositories/repository.user'
import type { CreateUserProps } from '../types/create-user'

import dotenv from 'dotenv'

export interface IUser {
  id_user?: string
  name?: string
  password?: string
  token?: string
}

dotenv.config()

async function createUser({ name, email, password }: CreateUserProps) {
  const hashPassword = await bcrypt.hash(password, 10)

  const user = await repositoryUser.createUser({
    name,
    email,
    password: hashPassword,
  })

  return user
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

  user.token = jwt.sign({ id: user.id_user }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  })

  return user
}

export default {
  createUser,
  login,
}
