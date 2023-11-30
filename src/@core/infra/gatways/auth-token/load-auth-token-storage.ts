import { LoadAuthTokenGateway } from '@/@core/domain/gateways/auth-token/load-auth-token'
import { LoadStorageAdapter } from '@/@core/infra/adapters/storage/load-storage'

export class LoadTokenStorage implements LoadAuthTokenGateway {
  constructor(private loadStorageAdapter: LoadStorageAdapter) {}

  load(key: string): string {
    return this.loadStorageAdapter.load(key)
  }
}
