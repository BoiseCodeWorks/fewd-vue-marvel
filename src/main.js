import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted(){//put any logic here that you want to have run at your application start
    store.dispatch('getCharacters')
  },
  render: function (h) { return h(App) }
}).$mount('#app')
