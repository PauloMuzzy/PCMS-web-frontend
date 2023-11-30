import {
  ListPatientResponseDTO,
  ListPatientsGatewayDTO
} from '@/@core/domain/DTO/patient/list-patients'
import { ListPatientsGateway } from '@/@core/domain/gateways/patient/list-patients'
import { HttpClientAdapter } from '@/@core/infra/adapters/http/http-client'

export class ListPatientsHttpClient implements ListPatientsGateway {
  constructor(private httpClientAdapter: HttpClientAdapter) {}

  async list({
    params,
    authToken
  }: ListPatientsGatewayDTO): Promise<ListPatientResponseDTO> {
    const response = await this.httpClientAdapter.request({
      url: process.env.NEXT_PUBLIC_BASE_URL + '/v1/patient/list',
      params: {
        ...params
      },
      method: 'get',
      headers: {
        authorization: 'Bearer ' + authToken
      }
    })
    return response
  }
}
