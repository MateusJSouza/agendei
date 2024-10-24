import { Router } from 'express'
import jwt from './token'
import controllerDoctor from './controllers/controller.doctor'
import controllerUser from './controllers/controller.user'
import controllerAppointment from './controllers/controller.appointment'

const router = Router()

// Doctors
router.get('/doctors', jwt.validateToken, controllerDoctor.listDoctors)
router.post('/doctors', jwt.validateToken, controllerDoctor.createDoctor)
router.put('/doctors/:id', jwt.validateToken, controllerDoctor.updateDoctor)
router.delete('/doctors/:id', jwt.validateToken, controllerDoctor.deleteDoctor)
router.get(
  '/doctors/:id_doctor/services',
  jwt.validateToken,
  controllerDoctor.listServices
)

// Users
router.post('/users/register', controllerUser.createUser)
router.post('/users/login', controllerUser.login)
router.get('/users/profile', jwt.validateToken, controllerUser.profile)

// Reservas (appointments)
router.get(
  '/appointments',
  jwt.validateToken,
  controllerAppointment.listByUsers
)
router.post(
  '/appointments',
  jwt.validateToken,
  controllerAppointment.createAppointment
)
router.delete(
  '/appointments/:id_appointment',
  jwt.validateToken,
  controllerAppointment.deleteAppointment
)

export default router
