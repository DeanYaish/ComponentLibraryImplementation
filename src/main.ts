import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import CyberpunkPreset from './presets/cyberpunk'
import './assets/base.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: CyberpunkPreset,
        options: {
            darkModeSelector: '.dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
})

app.mount('#app')
