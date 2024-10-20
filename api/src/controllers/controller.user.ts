import type { Request, Response } from 'express'
import serviceUser from '../services/service.user'

async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body
  const user = await serviceUser.createUser({ name, email, password })

  res.status(201).json(user)
}

export default {
  createUser,
}
