import { ILoadStorageAdapter } from '@/@core/domain/adapters/storage/load-storage'

export class LoadStorageAdapter implements ILoadStorageAdapter {
  load(key: string): string {
    return localStorage.getItem(key)
  }
}
