import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

Vue.config.productionTip = false

new Vue({
  router: createRouter(),
  render: h => h(App)
}).$mount('#app')
