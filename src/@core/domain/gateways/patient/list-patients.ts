import {
  ListPatientResponseDTO,
  ListPatientsGatewayDTO
} from '@/@core/domain/DTO/patient/list-patients'

export interface ListPatientsGateway {
  list({
    params,
    authToken
  }: ListPatientsGatewayDTO): Promise<ListPatientResponseDTO>
}
