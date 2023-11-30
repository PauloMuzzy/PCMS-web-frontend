import { CreatePatientRequestDTO } from '@/@core/domain/DTO/patient/create-patient'

export interface CreatePatientGateway {
  create(patient: CreatePatientRequestDTO, token: string): Promise<void>
}
