import repositoryDoctors from '../repositories/repository.doctors'

async function listDoctors(name: string) {
  const doctors = await repositoryDoctors.listDoctors(name)

  return doctors
}

export default {
  listDoctors,
}
