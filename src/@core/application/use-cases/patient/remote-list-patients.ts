import {
  ListPatientRequestDTO,
  ListPatientResponseDTO
} from '@/@core/domain/DTO/patient/list-patients'
import { LoadAuthTokenGateway } from '@/@core/domain/gateways/auth-token/load-auth-token'
import { ListPatientsGateway } from '@/@core/domain/gateways/patient/list-patients'

export class RemoteListPatientsUseCase {
  constructor(
    private listPatientsGateway: ListPatientsGateway,
    private loadAuthTokenGateway: LoadAuthTokenGateway
  ) {}

  async execute(
    params: ListPatientRequestDTO
  ): Promise<ListPatientResponseDTO> {
    const authToken = this.loadAuthTokenGateway.load('auth-token')
    return await this.listPatientsGateway.list({
      params,
      authToken
    })
  }
}
