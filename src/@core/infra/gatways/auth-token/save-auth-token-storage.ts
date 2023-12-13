import { SaveLocalAuthTokenGateway } from '@/@core/domain/gateways/auth-token/save-auth-token'
import { SaveStorageAdapter } from '@/@core/infra/adapters/storage/save-storage'

export class RemoteStorageClienteGateway implements SaveLocalAuthTokenGateway {
  constructor(private saveStorageAdapter: SaveStorageAdapter) {}

  save(token: string): void {
    this.saveStorageAdapter.save('auth-token', token)
  }
}
