import { BACKEND_PATIENT_CREATE_V1, httpClient } from '@/settings'

type Params = {
    name: string,
    lastName: string,
    email: string,
    gender: string,
    birthdate: string,
    cpf: string,
    phone: string,
    profession: string,
    education: string,
    photo?: string  
}

export async function createPatient(params: Params) {
  try {
    const { data } = await httpClient.post<any>(
        BACKEND_PATIENT_CREATE_V1,
        params
    )
    
    return data
  } catch (error) {
    throw error
  }
}
