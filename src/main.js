import Vue from 'vue'
import Buefy from 'buefy'
import App from '@/App.vue'
import router from '@/router'
import 'buefy/dist/buefy.css'
import store from './store/index'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
})

app.$mount('#app')
