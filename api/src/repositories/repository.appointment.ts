import { query } from '../db/sqlite'

export interface IAppointment {
  id_appointment: number
  service: string
  doctor: string
  specialty: string
  booking_date: string
  booking_hour: string
}

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

export default {
  listAppointments,
}
