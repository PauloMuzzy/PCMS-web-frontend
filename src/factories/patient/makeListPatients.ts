import { RemoteListPatientsUseCase } from '@/@core/application/use-cases/patient/remote-list-patients'
import {
  ListPatientRequestDTO,
  ListPatientResponseDTO
} from '@/@core/domain/DTO/patient/list-patients'
import { HttpClientAdapter } from '@/@core/infra/adapters/http/http-client'
import { LoadStorageAdapter } from '@/@core/infra/adapters/storage/load-storage'
import { LoadTokenStorage } from '@/@core/infra/gatways/auth-token/load-auth-token-storage'
import { ListPatientsHttpClient } from '@/@core/infra/gatways/patient/list-patients-http-client'

export const makeListPatients = async (
  params: ListPatientRequestDTO
): Promise<ListPatientResponseDTO> => {
  return new RemoteListPatientsUseCase(
    new ListPatientsHttpClient(new HttpClientAdapter()),
    new LoadTokenStorage(new LoadStorageAdapter())
  ).execute(params)
}
