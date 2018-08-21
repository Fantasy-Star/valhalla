import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-ink'
Vue.use(ElementUI)

import VueAboutMe from 'vue-about-me'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
Vue.use(VueAboutMe)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
