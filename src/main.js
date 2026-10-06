import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap'
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Bootstrap versi kustom (SCSS) menggantikan bootstrap.min.css
import './assets/custom.scss'

// CSS Anda sendiri, setelah Bootstrap agar bisa menimpa
import './assets/main.css'
import './assets/components.css'

createApp(App).use(router).mount('#app')

// install router
// install bootstrap-vue
// install bootstrap-icons
// install scss-loader (untuk mengimpor file SCSS)