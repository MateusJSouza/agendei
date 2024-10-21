import type { Request, Response } from 'express'
import serviceUser from '../services/service.user'

async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body
  const user = await serviceUser.createUser({ name, email, password })

  res.status(201).json(user)
}

async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body

  const user = await serviceUser.login(email, password)

  if (!user) {
    res.status(401).json({ error: 'Email ou senha inválida ' })
  }

  res.status(200).json(user)
}

export default {
  createUser,
  login,
}
