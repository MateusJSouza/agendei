import { query, type QueryProps } from '../db/sqlite'
import type { IDoctor } from '../types/doctor'

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

async function createDoctor(doctor: IDoctor) {
  const sql: QueryProps = {
    command:
      'INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?) RETURNING id_doctor',
    params: [doctor.name, doctor.specialty, doctor.icon],
    method: 'run',
  }

  await query(sql)
}

async function updateDoctor(id: string, doctor: IDoctor) {
  const sql: QueryProps = {
    command:
      'UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id = ?',
    params: [doctor.name, doctor.specialty, doctor.icon, id],
    method: 'run',
  }

  await query(sql)
}

async function deleteDoctor(id: string) {
  const sql: QueryProps = {
    command: 'DELETE FROM doctors WHERE id_doctor = ?',
    params: [id],
    method: 'run',
  }

  await query(sql)
}

export default {
  listDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
}
