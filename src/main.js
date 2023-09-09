import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios';

const app = createApp(App)
installElementPlus(app)



axios.get('/config/config.json')
.then(response => {
  const apiUrl = response.data.apiUrl;
  // 使用 apiUrl 来设置接口 URL
  axios.defaults.baseURL = apiUrl;
  console.log(apiUrl)

  // 启动 Vue.js 应用程序
  app.use(store).use(router).mount('#app')
})
.catch(error => {
  console.error('Failed to load config.json:', error);
});