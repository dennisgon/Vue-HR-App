import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sidebar from './components/Sidebar.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import axios from 'axios'

import { 
  faIdBadge,
  faHome,
  faClock,
  faFileInvoice,
  faPlaneDeparture,
  faPhone,
  faEnvelope,
  faCheckSquare,
  faTimesCircle,
  faUserClock,
  faCalendarAlt,
  faUserAstronaut
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
  faIdBadge,
  faHome,
  faClock,
  faFileInvoice,
  faPlaneDeparture,
  faPhone,
  faEnvelope,
  faCheckSquare,
  faTimesCircle,
  faUserClock,
  faCalendarAlt,
  faUserAstronaut
])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('sidebar', sidebar);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
