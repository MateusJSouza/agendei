import type { NextFunction, Request, RequestHandler, Response } from 'express'
import type { IDoctor } from '../types/doctor'
import serviceDoctor from '../services/service.doctor'

const listDoctors: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const name = (req.query.name as string) || ''
    const doctors = (await serviceDoctor.listDoctors(name)) as IDoctor[]
    res.status(200).json(doctors)
  } catch (error) {
    next(error)
  }
}

const createDoctor: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, specialty, icon } = req.body
    const doctor = await serviceDoctor.createDoctor({ name, specialty, icon })
    res.status(201).json(doctor)
  } catch (error) {
    next(error)
  }
}

const updateDoctor: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id
    const doctor: IDoctor = req.body
    await serviceDoctor.updateDoctor(id, doctor)
    res.status(200).json({ message: 'Médico atualizado com sucesso!' })
  } catch (error) {
    next(error)
  }
}

const deleteDoctor: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id
    await serviceDoctor.deleteDoctor(id)
    res.status(200).json({ message: 'Médico deletado com sucesso!' })
  } catch (error) {
    next(error)
  }
}

const listServices: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id_doctor = req.params.id_doctor
    const services = (await serviceDoctor.listServices(id_doctor)) as IDoctor[]
    res.status(200).json(services)
  } catch (error) {
    next(error)
  }
}

export default {
  listDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  listServices,
}
