import type { NextFunction, Request, RequestHandler, Response } from 'express'
import serviceAppointment from '../services/service.appointment'

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

export default {
  listByUsers,
}
