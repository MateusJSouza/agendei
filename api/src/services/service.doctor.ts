import repositoryDoctors from '../repositories/repository.doctors'
import type { IDoctor } from '../types/doctor'

async function listDoctors(name: string) {
  const doctors = await repositoryDoctors.listDoctors(name)

  return doctors
}

async function createDoctor(doctor: IDoctor) {
  await repositoryDoctors.createDoctor(doctor)
}

async function updateDoctor(id: string, doctor: IDoctor) {
  await repositoryDoctors.updateDoctor(id, doctor)
}

async function deleteDoctor(id: string) {
  await repositoryDoctors.deleteDoctor(id)
}

export default {
  listDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
}
