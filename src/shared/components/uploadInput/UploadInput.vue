<template>
  <div class="max-w-lg mx-auto">
    <!-- Barra acima do textarea com botão e select -->
    <div
      class="flex items-center bg-gray-200 px-3 py-2 rounded-t-lg border border-b-0"
    >
      <button
        class="text-sm text-blue-500 font-semibold focus:outline-none"
        @click="toggleExampleOptions"
      >
        Usar Exemplo
      </button>
      <div v-if="showOptions" class="ml-2">
        <select
          v-model="exampleSelected"
          class="text-sm border rounded px-2 py-1"
          @change="applyExample"
        >
          <option disabled value="">Selecione um exemplo</option>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
          <option value="tailwind">Tailwind</option>
          <option value="figma">Figma</option>
        </select>
      </div>
    </div>

    <!-- Textarea com bordas superiores retas -->
    <textarea
      v-model="value"
      class="w-full border border-gray-300 px-3 py-2 rounded-b-lg resize-none"
      rows="3"
      placeholder="Cole seu código aqui"
    ></textarea>

    <!-- Footer com aviso dos formatos aceitos -->
    <div class="text-xs text-gray-500 mt-1 px-3">
      Formatos aceitos: CSS, SCSS, LESS, Tailwind, Figma
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '', // conteúdo do textarea
        showOptions: false, // controla a exibição do select
        exampleSelected: '', // exemplo selecionado
      }
    },
    methods: {
      toggleExampleOptions() {
        this.showOptions = !this.showOptions
      },
      applyExample() {
        // Define o conteúdo do textarea com base no exemplo selecionado
        const examples = {
          css: '/* Exemplo CSS */\nbody { color: #333; }',
          scss: '/* Exemplo SCSS */\n$primary-color: #333;\nbody { color: $primary-color; }',
          less: '/* Exemplo LESS */\n@primary-color: #333;\nbody { color: @primary-color; }',
          tailwind:
            '/* Exemplo Tailwind */\n<div class="text-gray-800 bg-blue-200 p-4">Texto</div>',
          figma:
            '/* Exemplo Figma JSON */\n{\n  "fill": "#333",\n  "stroke": "#000"\n}',
        }
        this.value = examples[this.exampleSelected] || ''
        this.showOptions = false // Oculta o select após aplicar o exemplo
      },
    },
  }
</script>

<style scoped>
  /* Ajustes para remover bordas superiores arredondadas do textarea */
  textarea {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
