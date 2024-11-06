import { UploadStore } from '@/shared/types/storeTypes'

export function useUrlUpload(store: UploadStore) {
  const handleUrlUpload = () => {
    if (store.fileUrl) {
      console.log('File uploaded via URL:', store.fileUrl)
      store.setFileContent(`/* Simulated content from ${store.fileUrl} */`)
      store.fileUrl = '' // Limpa a URL após o upload
    }
  }

  return {
    handleUrlUpload,
  }
}
