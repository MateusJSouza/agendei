import { query, type QueryProps } from '../db/sqlite'

async function listDoctors(name?: string) {
  const sql: QueryProps = {
    command: name
      ? 'SELECT * FROM doctors WHERE name LIKE ? ORDER BY name'
      : 'SELECT * FROM doctors ORDER BY name',
    params: name ? [`%${name}%`] : [],
    method: 'all',
  }

  const doctors = await query(sql)

  return doctors
}

export default {
  listDoctors,
}
