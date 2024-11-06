// uploadStore.ts
import { defineStore } from 'pinia'
import { UploadStoreState, UploadStoreActions } from '@/shared/types/storeTypes'

export const useUploadStore = defineStore<
  'upload',
  UploadStoreState,
  {},
  UploadStoreActions
>('upload', {
  state: () => ({
    fileContent: '',
    fileUrl: null,
  }),
  actions: {
    setFileContent(content: string) {
      this.fileContent = content
    },
    setFileUrl(url: string) {
      this.fileUrl = url
    },
  },
})
