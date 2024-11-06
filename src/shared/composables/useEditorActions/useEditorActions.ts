import { UploadStore } from '@/shared/types/storeTypes'

export function useEditorActions(store: UploadStore) {
  const clearEditor = () => {
    debugger
    store.setFileContent('')
  }

  const translateToPalette = () => {
    console.log('Translating to color palette with content:', store.fileContent)
  }

  return {
    clearEditor,
    translateToPalette,
  }
}
