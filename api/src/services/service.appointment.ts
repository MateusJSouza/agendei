import repositoryAppointment from '../repositories/repository.appointment'
import type { IAppointment } from '../types/appointment'

async function listAppointments(id_user: string) {
  const appointments = await repositoryAppointment.listAppointments(id_user)

  return appointments
}

async function createAppointment({
  id_doctor,
  id_user,
  id_service,
  booking_date,
  booking_hour,
}: IAppointment) {
  const appointment = await repositoryAppointment.createAppointment({
    id_doctor,
    id_user,
    id_service,
    booking_date,
    booking_hour,
  })

  return appointment
}

async function deleteAppointment(id_user: string, id_appointment: string) {
  const appointment = await repositoryAppointment.deleteAppointment(
    id_user,
    id_appointment
  )

  return appointment
}

export default {
  listAppointments,
  createAppointment,
  deleteAppointment,
}
