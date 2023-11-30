import { IStorageAdapter } from '@/@core/domain/adapters/storage/storage'

export class StorageAdapter implements IStorageAdapter {
  saveStorage(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
}
