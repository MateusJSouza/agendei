import type { Request, Response } from 'express'
import serviceDoctor, { type IDoctor } from '../services/service.doctor'

async function listDoctors(req: Request, res: Response) {
  const doctors = (await serviceDoctor.listDoctors()) as IDoctor[]

  res.status(200).json(doctors)
}

export default {
  listDoctors,
}
