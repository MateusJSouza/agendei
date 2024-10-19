import type { Request, Response } from 'express'
import type { IDoctor } from '../types/doctor'
import serviceDoctor from '../services/service.doctor'
import { query, type QueryProps } from '../db/sqlite'

async function listDoctors(req: Request, res: Response) {
  const name = (req.query.name as string) || ''
  const doctors = (await serviceDoctor.listDoctors(name)) as IDoctor[]

  res.status(200).json(doctors)
}

async function createDoctor(req: Request, res: Response) {
  const doctor: IDoctor = req.body
  await serviceDoctor.createDoctor(doctor)

  res.status(201).json({ message: 'Médico criado com sucesso!' })
}

async function updateDoctor(req: Request, res: Response) {
  const id = req.params.id
  const doctor: IDoctor = req.body
  await serviceDoctor.updateDoctor(id, doctor)

  res.status(200).json({ message: 'Médico atualizado com sucesso!' })
}

async function deleteDoctor(req: Request, res: Response) {
  const id = req.params.id
  await serviceDoctor.deleteDoctor(id)

  res.status(200).json({ message: 'Médico deletado com sucesso!' })
}

export default {
  listDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
}
