import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chartick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'
import router from '@/router'
import { dollarFilter, percentFilter } from '@/filter'

Vue.filter('dollar', dollarFilter)
Vue.filter('dollarPercent', percentFilter)
Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

