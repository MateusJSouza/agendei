import { query } from '../db/sqlite'
import type { IAppointment } from '../types/appointment'

async function listAppointments(id_user: string) {
  const sql = {
    command: `
      select a.id_appointment, s.description as service,
      d.name as doctor, d.specialty,
      a.booking_date, a.booking_hour, u.name as user, ds.price
      from appointments a
      join services s on (s.id_service = a.id_service)
      join doctors d on (d.id_doctor = a.id_doctor)
      join users u on (u.id_user = a.id_user)
      join doctors_services ds on (ds.id_doctor = a.id_doctor and
          ds.id_service = a.id_service)
      where a.id_user = ?
      order by a. booking_date, a.booking_hour
    `,
    params: [id_user],
    method: 'all',
  }

  const appointments = await query(sql.command, sql.params)

  return appointments
}

async function createAppointment({
  id_doctor,
  id_user,
  id_service,
  booking_date,
  booking_hour,
}: IAppointment) {
  const sql = {
    command: `
        INSERT INTO appointments
        (id_doctor, id_user, id_service, booking_date, booking_hour)
        VALUES (?, ?, ?, ?, ?) RETURNING id_appointment
      `,
    params: [id_doctor, id_user, id_service, booking_date, booking_hour],
    method: 'run',
  }

  const appointment = (await query(sql.command, sql.params)) as {
    id_appointment: number
  }[]

  return appointment[0]
}

export default {
  listAppointments,
  createAppointment,
}
