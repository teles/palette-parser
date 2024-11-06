<template>
  <div class="flex justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Container Principal -->
    <div class="w-full max-w-4xl p-6">
      <!-- Área Hero com Título e Subtítulo -->
      <div class="text-left mb-10 space-y-4">
        <h1 class="text-4xl font-semibold text-gray-800 dark:text-gray-200">
          Palette Parser
        </h1>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          Upload or paste CSS content to generate a color palette
        </p>
      </div>

      <!-- Barra de Ferramentas -->
      <div
        class="flex items-center space-x-4 pb-4 mb-6 border-b border-gray-300 dark:border-gray-700 mt-8"
      >
        <!-- Botão para Upload via URL -->
        <button
          class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Upload from URL"
          @click="openUrlModal"
        >
          <i class="pi pi-link text-lg"></i>
        </button>

        <!-- Botão para Upload do Computador -->
        <label
          class="cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Upload from Computer"
        >
          <input type="file" class="hidden" @change="handleFileUpload" />
          <i class="pi pi-upload text-lg"></i>
        </label>

        <!-- Botão para Usar Exemplo -->
        <button
          class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Use Example"
          @click="useExample"
        >
          <i class="pi pi-bookmark text-lg"></i>
        </button>

        <!-- Divisor Vertical -->
        <div class="border-r border-gray-300 dark:border-gray-700 h-6"></div>

        <!-- Botão para Limpar Conteúdo -->
        <button
          class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Clear Content"
          @click="clearEditor"
        >
          <i class="pi pi-times text-lg"></i>
        </button>
      </div>

      <!-- Textarea do PrimeVue -->
      <Textarea
        v-model="store.fileContent"
        rows="10"
        placeholder="Paste or write CSS code here..."
        class="w-full p-4 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      />

      <!-- Botão de Ação Principal -->
      <div class="mt-6 text-center">
        <Button
          label="Parse Palette"
          class="p-button-lg p-button-text w-1/3 text-lg font-medium text-gray-800 border-gray-300 hover:border-gray-500 dark:text-gray-200 dark:border-gray-700 dark:hover:border-gray-500"
          @click="translateToPalette"
        />
      </div>
    </div>

    <!-- Modal para URL -->
    <Dialog
      v-model="showUrlModal"
      header="Upload via URL"
      :modal="true"
      :closable="true"
    >
      <div class="p-4">
        <label for="url" class="block mb-2 text-gray-600 dark:text-gray-400"
          >Enter URL:</label
        >
        <input
          id="url"
          v-model="store.fileUrl"
          type="text"
          placeholder="https://example.com/file.css"
          class="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        />
      </div>
      <template #footer>
        <Button label="Upload" class="mr-2" @click="handleUrlUpload" />
        <Button
          label="Cancel"
          class="p-button-secondary"
          @click="() => (showUrlModal = false)"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useUploadStore } from '@/shared/stores/uploadStore'
  import { useFileUpload } from '@/shared/composables/useFileUpload/useFileUpload'
  import { useEditorActions } from '@/shared/composables/useEditorActions/useEditorActions'
  import { useExampleContent } from '@/shared/composables/useExampleContent/useExampleContent'
  import { useUrlUpload } from '@/shared/composables/useUrlUpload/useUrlUpload'
  import Dialog from 'primevue/dialog'
  import Textarea from 'primevue/textarea'
  import Button from 'primevue/button'

  // Acessa a store do Pinia
  const store = useUploadStore()
  // Usa os composables passando a store como parâmetro
  const { handleFileUpload } = useFileUpload(store)
  const { clearEditor, translateToPalette } = useEditorActions(store)
  const { useExample } = useExampleContent(store)
  const { handleUrlUpload } = useUrlUpload(store)

  // Controle do Modal de URL
  const showUrlModal = ref(false)

  // Função para abrir o modal de URL
  const openUrlModal = () => {
    debugger
    showUrlModal.value = true
  }
</script>

<style scoped>
  /* Custom styling */
</style>
