import { CreatePatientRequestDTO } from '@/@core/domain/DTO/patient/create-patient'
import { CreatePatientGateway } from '@/@core/domain/gateways/patient/create.patient'
import { HttpClientAdapter } from '@/@core/infra/adapters/http/http-client'

export class CreatePatientHttpClient implements CreatePatientGateway {
  constructor(private httpClientAdapter: HttpClientAdapter) {}

  async create(patient: CreatePatientRequestDTO, token: string): Promise<void> {
    await this.httpClientAdapter.request({
      url: process.env.NEXT_PUBLIC_BASE_URL + '/v1/patient/create',
      method: 'post',
      body: patient,
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }
}
