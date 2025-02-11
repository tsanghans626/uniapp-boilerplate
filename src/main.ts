import { createSSRApp } from 'vue'
import { requestInterceptor, routerInterceptor } from './interceptors'
import { checkBtnPermission } from './utils'
import App from './App.vue'
import store from './store'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.config.globalProperties.$perms = checkBtnPermission
  app.use(requestInterceptor)
  app.use(routerInterceptor)
  return {
    app
  }
}
