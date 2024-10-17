import { Router } from 'express'
import controllerDoctor from './controllers/controller.doctor'

const router = Router()

router.get('/doctors', controllerDoctor.listDoctors)

export default router
