import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  el:'#demo',
  render: h => h(App),
})
