import type { Request, Response } from 'express'
import type { IDoctor } from '../types/doctor'
import serviceDoctor from '../services/service.doctor'

async function listDoctors(req: Request, res: Response) {
  const name = (req.query.name as string) || ''
  const doctors = (await serviceDoctor.listDoctors(name)) as IDoctor[]

  res.status(200).json(doctors)
}

export default {
  listDoctors,
}
