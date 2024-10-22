import { query } from '../db/sqlite'
import type { User } from '../services/service.user'
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

  const user = await query<User>(sql.command, sql.params, 'get')

  return user || null
}

async function profile(id_user: string) {
  const sql = {
    command: 'SELECT id_user, name, email FROM users WHERE id_user = ?',
    params: [id_user],
    method: 'all',
  }

  const user = await query(sql.command, sql.params)

  return user
}

export default {
  createUser,
  findUserByEmail,
  profile,
}
