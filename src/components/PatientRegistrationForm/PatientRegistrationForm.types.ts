export type PatientRegistrationForm = {
  patient?: Patient
}

type Patient = {
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
