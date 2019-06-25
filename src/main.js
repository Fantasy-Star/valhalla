import Vue from 'vue'
import App from './App.vue'

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
import BackToTop from 'vue-backtotop'
Vue.use(BackToTop)

// Vue.config.productionTip = false

// material
import "@material/chips/dist/mdc.chips.min.css"
import "@material/fab/dist/mdc.fab.min.css"
import "@material/icon-button/dist/mdc.icon-button.min.css"
import "@material/layout-grid/dist/mdc.layout-grid.min.css"
import "@material/typography/dist/mdc.typography.min.css"

new Vue({
  render: h => h(App)
}).$mount('#app')
