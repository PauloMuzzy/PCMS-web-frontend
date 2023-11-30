import { ISaveStorageAdapter } from '@/@core/domain/adapters/storage/save-storage'

export class SaveStorageAdapter implements ISaveStorageAdapter {
  save(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
}
