import repositoryDoctors from '../repositories/repository.doctors'

export interface IDoctor {
  name: string
  specialty: string
  icon: string
}

async function listDoctors() {
  const doctors = await repositoryDoctors.listDoctors()

  return doctors
}

export default {
  listDoctors,
}
