import { StorageClient } from '@/@core/domain/gateways/storage-client'
import { StorageAdapter } from '@/@core/infra/adapters/storage'

export class StorageClienteGateway implements StorageClient {
  constructor(private storageAdapter: StorageAdapter) {}

  saveToken(token: string): void {
    this.storageAdapter.saveStorage('auth-token', token)
  }
}
