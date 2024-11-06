import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores: ['coverage/*', 'node_modules/*'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      vue: vuePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Regras recomendadas do TypeScript
      ...vuePlugin.configs['vue3-recommended'].rules, // Regras recomendadas do Vue 3
      ...prettierConfig.rules, // Regras do Prettier para evitar conflitos
      'prettier/prettier': 'error', // Aplica o Prettier como regra de erro
      'vue/attributes-order': 'error', // Garante a ordem dos atributos
      'vue/multi-word-component-names': 'off', // Desabilita a regra de nomes de componentes com mais de uma palavra
      '@typescript-eslint/no-empty-interface': 'off', // Desabilita a regra de interfaces vazias
      '@typescript-eslint/no-empty-object-type': [
        // Avisa sobre tipos de objeto vazios
        'warn', // Avisa sobre tipos de objeto vazios
        { allowObjectTypes: true }, // Configuração para permitir tipos de objeto vazio
      ],
    },
  },
]
