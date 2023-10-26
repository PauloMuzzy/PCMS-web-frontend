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
  photo?: string
}

export async function getPatients() {
  try {
    // const data = await privateHttpClient.post<any>(BACKEND_PATIENT_CREATE_V1)
    // return data.status === 201 && true
    return {
      name: 'string',
      lastname: 'string',
      email: 'string',
      gender: 'ring',
      birthdate: 'string',
      cpf: 'string',
      phone: 'string',
      profession: 'string',
      education: 'string',
      photo: 'string'
    }
  } catch (error) {
    throw error
  }
}
