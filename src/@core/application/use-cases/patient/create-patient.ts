import { CreatePatientRequestDTO } from '@/@core/domain/DTO/patient/create-patient'
import { CreatePatientGateway } from '@/@core/domain/gateways/patient/create.patient'
import { LoadTokenStorageGateway } from '@/@core/domain/gateways/storage/load-token-storage'

export class CreatePatientUseCase {
  constructor(
    private createPatientGateway: CreatePatientGateway,
    private loadTokenStorage: LoadTokenStorageGateway
  ) {}

  async execute(patient: CreatePatientRequestDTO): Promise<void> {
    const token = this.loadTokenStorage.loadToken('auth-token')
    await this.createPatientGateway.create(patient, token)
  }
}
