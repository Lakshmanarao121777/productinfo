import './assets/main.css'
// Import our custom CSS
import './assets/scss/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.mount('#app')
