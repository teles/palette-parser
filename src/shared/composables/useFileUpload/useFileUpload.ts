import { UploadStore } from '@/shared/types/storeTypes'

export function useFileUpload(store: UploadStore) {
  const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        store.setFileContent(reader.result as string)
      }
      reader.readAsText(file)
    }
  }

  return {
    handleFileUpload,
  }
}
