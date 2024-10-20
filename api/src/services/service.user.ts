import bcrypt from 'bcrypt'
import repositoryUser from '../repositories/repository.user'
import type { IUser } from '../types/user'

async function createUser({ name, email, password }: IUser) {
  const hashPassword = await bcrypt.hash(password, 10)

  const user = await repositoryUser.createUser({
    name,
    email,
    password: hashPassword,
  })

  return user
}

export default {
  createUser,
}
