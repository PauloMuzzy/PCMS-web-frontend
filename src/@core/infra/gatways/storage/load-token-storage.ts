import { LoadTokenStorageGateway } from '@/@core/domain/gateways/storage/load-token-storage'
import { LoadStorageAdapter } from '@/@core/infra/adapters/storage/load-storage'

export class LoadTokenStorage implements LoadTokenStorageGateway {
  constructor(private loadStorageAdapter: LoadStorageAdapter) {}

  loadToken(key: string): string {
    return this.loadStorageAdapter.loadStorage(key)
  }
}
