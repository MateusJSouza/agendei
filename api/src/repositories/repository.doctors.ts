import { query } from '../db/sqlite'
import type { IDoctor } from '../types/doctor'

async function listDoctors(name?: string) {
  const sql = {
    command: name
      ? 'SELECT * FROM doctors WHERE name LIKE ? ORDER BY name'
      : 'SELECT * FROM doctors ORDER BY name',
    params: name ? [`%${name}%`] : [],
    method: 'all',
  }

  const doctors = await query(sql.command, sql.params)

  return doctors
}

async function createDoctor({ name, specialty, icon }: IDoctor) {
  const sql = {
    command:
      'INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?) RETURNING id_doctor',
    params: [name, specialty, icon],
    method: 'run',
  }

  const doctor = (await query(sql.command, sql.params)) as {
    id_doctor: number
  }[]

  return doctor[0]
}

async function updateDoctor(id: string, doctor: IDoctor) {
  const sql = {
    command:
      'UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id = ?',
    params: [doctor.name, doctor.specialty, doctor.icon, id],
    method: 'run',
  }

  await query(sql.command, sql.params)
}

async function deleteDoctor(id: string) {
  const sql = {
    command: 'DELETE FROM doctors WHERE id_doctor = ?',
    params: [id],
    method: 'run',
  }

  await query(sql.command, sql.params)
}

async function listServices(id_doctor: string) {
  const sql = {
    command: `
      SELECT d.id_service, s.description, d.price FROM doctors_services d
      JOIN services s ON (s.id_service = d.id_service)
      WHERE d.id_doctor = ?
      ORDER BY s.description
    `,
    params: [id_doctor],
    method: 'all',
  }

  const services = await query(sql.command, sql.params)

  return services
}

export default {
  listDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  listServices,
}
