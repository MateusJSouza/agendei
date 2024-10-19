import { Router } from 'express'
import controllerDoctor from './controllers/controller.doctor'

const router = Router()

// Doctors
router.get('/doctors', controllerDoctor.listDoctors)
router.post('/doctors', controllerDoctor.createDoctor)
router.put('/doctors/:id', controllerDoctor.updateDoctor)
router.delete('/doctors/:id', controllerDoctor.deleteDoctor)

// TODO - Usuários (Users)

// TODO - Reservas (appointments)

// TODO - Serviços prestados (Services)

export default router
