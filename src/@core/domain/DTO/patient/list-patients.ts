export interface ListPatientRequestDTO {
  limit: number
  itemsPerPage: number
  active?: boolean
  email?: string
}

export interface ListPatientResponseDTO {
  patients: Patient[]
}

export type Patient = {
  name: string
  lastname: string
  email: string
  gender: string
  birthdate: string
  cpf: string
  phone: string
  profession: string
  education: string
  photo: string
  obs: string
  securityContact: {
    name: string
    lastname: string
    phone: string
    relationship: string
  }
}

export type ListPatientsGatewayDTO = {
  params: ListPatientRequestDTO
  authToken: string
}
