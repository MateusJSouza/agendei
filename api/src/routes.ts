import { Router } from 'express'
import controllerDoctor from './controllers/controller.doctor'
import controllerAppointment from './controllers/controller.appointment'

const router = Router()

router.get('/doctors', controllerDoctor.listDoctors)
router.get('/appointments', controllerAppointment.list)

router.get('/profile', (req, res) => {
  res.status(200).send('Aqui vamos listar o perfil do usuário')
})

export default router
