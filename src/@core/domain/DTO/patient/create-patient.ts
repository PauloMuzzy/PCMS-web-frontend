export interface CreatePatientRequestDTO {
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
  securityContact: SecurityContact
}

export type SecurityContact = {
  name: string
  lastname: string
  phone: string
  relationship: string
}
