import { query } from '../db/sqlite'
import type { IUser } from '../services/service.user'
import type { CreateUserProps } from '../types/create-user'

async function createUser({ name, email, password }: CreateUserProps) {
  const sql = {
    command:
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?) RETURNING id_user',
    params: [name, email, password],
    method: 'run',
  }

  const user = (await query(sql.command, sql.params)) as { id_user: number }[]

  return user[0]
}

async function findUserByEmail(email: string) {
  const sql = {
    command: 'SELECT * FROM users WHERE email = ?',
    params: [email],
    method: 'get',
  }

  const user = await query<IUser>(sql.command, sql.params, 'get')

  return user || null
}

export default {
  createUser,
  findUserByEmail,
}
