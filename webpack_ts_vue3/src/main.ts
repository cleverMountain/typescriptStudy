import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $http from "./utils/http/index"

createApp(App).use(router).mount('#app')
  


$http.post('user/login?uname=sdsa')