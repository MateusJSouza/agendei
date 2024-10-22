import type { NextFunction, Request, Response } from 'express'
import serviceUser from '../services/service.user'

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

async function profile(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id_user = req.id_user

    if (!id_user) {
      res.status(400).json({ message: 'ID do usuário é obrigatório ' })
      return
    }

    const user = await serviceUser.profile(id_user)
    res.status(200).json(user)

    console.log('User controller: ', user)
  } catch (error) {
    next(error)
  }
}

export default {
  createUser,
  login,
  profile,
}
