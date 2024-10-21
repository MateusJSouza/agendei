import type { NextFunction, Request, RequestHandler, Response } from 'express'
import jwt, { type JwtPayload } from 'jsonwebtoken'

const secretToken = 'jornadaJS123'

function createToken(id_user: string) {
  const token = jwt.sign({ id_user }, secretToken, {
    expiresIn: '1h',
  })

  return token
}

// Estendendo a interface Request para incluir id_user
declare module 'express-serve-static-core' {
  interface Request {
    id_user?: string
  }
}

const validateToken: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization

  if (!authToken) {
    res.status(401).json({ error: 'Token não informado' })
    return
  }

  const [bearer, token] = authToken.split(' ')

  if (bearer !== 'Bearer' || !token) {
    res.status(401).json({ error: 'Token mal formatado' })
    return
  }

  jwt.verify(token, secretToken, (err, tokenDecoded) => {
    if (err) {
      res.status(401).json({ error: 'Token inválido' })
      return
    }

    if (
      tokenDecoded &&
      typeof tokenDecoded === 'object' &&
      'id_user' in tokenDecoded
    ) {
      req.id_user = (tokenDecoded as JwtPayload).id_user
      next()
    } else {
      res.status(401).json({ error: 'Token inválido' })
    }
  })
}

export default { createToken, validateToken }
