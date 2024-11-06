export interface UploadStoreState {
  fileContent: string
  fileUrl: string | null
}

export interface UploadStoreActions {
  setFileContent: (content: string) => void
  setFileUrl: (url: string) => void
}

export interface UploadStore extends UploadStoreState, UploadStoreActions {}
