import { UploadStore } from '@/shared/types/storeTypes'

export function useExampleContent(store: UploadStore) {
  const useExample = () => {
    const exampleContent =
      ':root { --primary-color: #3498db; --secondary-color: #2ecc71; }'
    store.setFileContent(exampleContent)
  }

  return {
    useExample,
  }
}
