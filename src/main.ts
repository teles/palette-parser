import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'primeicons/primeicons.css'
import '@/style.css'

import PrimeVue from 'primevue/config'

import App from '@/App.vue'
import AmPreset from '@/preset'
import { loadGtm } from '@/shared/utils/loadGtm'
import router from '@/router'

import {
  ConsoleLogger,
  ExceptionLogger,
} from '@/shared/services/ExceptionLogger'
import { Env } from '@/shared/utils/env/env'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue, {
  theme: {
    preset: AmPreset,
    options: {
      prefix: 'am',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
      darkModeSelector: 'system',
    },
  },
})

app.use(pinia)
loadGtm(Env.gtmId())

/**
 * @description
 * Instancia o serviço de log de exceções ExceptionLogger e o fornece para a aplicação.
 *
 * @constant {ExceptionLogger} exceptionLogger - Serviço de log de exceções utilizado para registrar erros e informações.
 */
ExceptionLogger.initialize(new ConsoleLogger())
app.provide('exceptionLogger', ExceptionLogger.getInstance())

app.use(router).mount('#app')
