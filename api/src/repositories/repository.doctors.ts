import { query, type QueryProps } from '../db/sqlite'

async function listDoctors() {
  const sql: QueryProps = {
    command: 'SELECT * FROM doctors ORDER BY name',
    params: [],
    method: 'all',
  }

  const doctors = await query(sql)

  return doctors
}

export default {
  listDoctors,
}
