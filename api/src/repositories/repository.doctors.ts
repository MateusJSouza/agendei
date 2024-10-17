import { v4 as uuidv4 } from 'uuid'

export interface IDoctor {
  name: string
  specialty: string
  icon: string
}

async function listDoctors() {
  const doctors = [
    { id: 1, name: 'Mateus Jesus', specialty: 'Cardiologista', icon: 'M' },
    { id: 2, name: 'Maria Joaquina', specialty: 'Cardiologista', icon: 'F' },
    { id: 3, name: 'Yago Bryan', specialty: 'Clínico Geral', icon: 'M' },
  ]

  return doctors
}

export default {
  listDoctors,
}
