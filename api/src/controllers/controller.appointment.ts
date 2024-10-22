import type { NextFunction, Request, RequestHandler, Response } from 'express'
import serviceAppointment from '../services/service.appointment'
import type { IAppointment } from '../types/appointment'

const listByUsers: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id_user = req.id_user

    if (!id_user) {
      res.status(400).json({ message: 'ID de usuário não encontrado ' })
    } else {
      const appointments = await serviceAppointment.listAppointments(id_user)
      res.status(200).json(appointments)
    }
  } catch (error) {
    next(error)
  }
}

const createAppointment: RequestHandler = async (
  req: Request<{}, {}, IAppointment>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id_user = req.id_user

    if (!id_user) {
      res.status(400).json({ message: 'ID do usuário é obrigatório' })
      return
    }

    const { id_doctor, id_service, booking_date, booking_hour } = req.body

    const formattedDate = new Date(booking_date).toISOString().split('T')[0]

    const appointment = await serviceAppointment.createAppointment({
      id_user: Number(id_user),
      id_doctor,
      id_service,
      booking_date: formattedDate,
      booking_hour,
    })

    res.status(201).json(appointment)
  } catch (error) {
    next(error)
  }
}

export default {
  listByUsers,
  createAppointment,
}
