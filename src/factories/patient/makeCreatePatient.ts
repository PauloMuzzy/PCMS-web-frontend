import { CreatePatientUseCase } from '@/@core/application/use-cases/patient/create-patient'
import { CreatePatientRequestDTO } from '@/@core/domain/DTO/patient/create-patient'
import { HttpClientAdapter } from '@/@core/infra/adapters/http/http-client'
import { LoadStorageAdapter } from '@/@core/infra/adapters/storage/load-storage'
import { LoadTokenStorage } from '@/@core/infra/gatways/auth-token/load-auth-token-storage'
import { CreatePatientHttpClient } from '@/@core/infra/gatways/patient/create-patient-http-client'

export const makeCreatePatient = async (patient: CreatePatientRequestDTO) => {
  await new CreatePatientUseCase(
    new CreatePatientHttpClient(new HttpClientAdapter()),
    new LoadTokenStorage(new LoadStorageAdapter())
  ).execute(patient)
}
