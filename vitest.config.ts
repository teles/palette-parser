import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8'
    },
    server: {
      deps: {
        inline: ['detect-incognito']
      }
    },
    setupFiles: [resolve(__dirname, 'tests/setup.ts')]
  }
})
