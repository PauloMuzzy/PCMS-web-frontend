import { BACKEND_PATIENT_CREATE_V1, privateHttpClient } from '@/settings'

type Params = {
  name: string
  lastname: string
  email: string
  gender: string
  birthdate: string
  cpf: string
  phone: string
  profession: string
  education: string
  photo?: ''
}

export async function createPatient(params: Params) {
  try {
    const data = await privateHttpClient.post<any>(
      BACKEND_PATIENT_CREATE_V1,
      params
    )
    return data.status === 201 && true
  } catch (error) {
    throw error
  }
}
