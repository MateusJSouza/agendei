import { query } from '../db/sqlite'
import type { IUser } from '../types/user'

async function createUser({ name, email, password }: IUser) {
  const sql = {
    command:
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?) RETURNING id_user',
    params: [name, email, password],
    method: 'run',
  }

  const user = (await query(sql.command, sql.params)) as { id_user: number }[]

  return user[0]
}

export default {
  createUser,
}
