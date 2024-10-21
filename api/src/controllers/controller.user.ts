import type { NextFunction, Request, Response } from 'express'
import serviceUser from '../services/service.user'
import jwt from '../token'

async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body
  const { id_user, token } = await serviceUser.createUser({
    name,
    email,
    password,
  })

  res.status(201).json({ id_user, token })
}

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body
    const result = await serviceUser.login(email, password)

    if (!result) {
      res.status(401).json({ error: 'Email ou senha inválida' })
      return
    }

    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

export default {
  createUser,
  login,
}
