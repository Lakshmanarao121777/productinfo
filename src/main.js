import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
// import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

// Import our custom CSS
import './assets/main.css'
// import './assets/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(router)
// app.use(bootstrap)
// Make BootstrapVue available throughout your project
// app.use(BootstrapVue)
// app.use(BootstrapVueIcons)
// app.use(IconsPlugin)

app.mount('#app')
