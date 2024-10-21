import { Router } from 'express'
import controllerDoctor from './controllers/controller.doctor'
import controllerUser from './controllers/controller.user'

const router = Router()

// Doctors
router.get('/doctors', controllerDoctor.listDoctors)
router.post('/doctors', controllerDoctor.createDoctor)
router.put('/doctors/:id', controllerDoctor.updateDoctor)
router.delete('/doctors/:id', controllerDoctor.deleteDoctor)

// TODO - Usuários (Users)
router.post('/users/register', controllerUser.createUser)
router.post('/users/login', controllerUser.login)

// TODO - Reservas (appointments)

// TODO - Serviços prestados (Services)

export default router
