import { CreatePatientRequestDTO } from '@/@core/domain/DTO/patient/create-patient'
import { LoadAuthTokenGateway } from '@/@core/domain/gateways/auth-token/load-auth-token'
import { CreatePatientGateway } from '@/@core/domain/gateways/patient/create.patient'

export class CreatePatientUseCase {
  constructor(
    private createPatientGateway: CreatePatientGateway,
    private loadAuthTokenGateway: LoadAuthTokenGateway
  ) {}

  async execute(patient: CreatePatientRequestDTO): Promise<void> {
    const token = this.loadAuthTokenGateway.load('auth-token')
    await this.createPatientGateway.create(patient, token)
  }
}
