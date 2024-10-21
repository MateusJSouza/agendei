import repositoryAppointment from '../repositories/repository.appointment'

async function listAppointments(id_user: string) {
  const appointments = await repositoryAppointment.listAppointments(id_user)

  return appointments
}

export default {
  listAppointments,
}
