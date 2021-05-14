import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import postal from 'postal'

import App from './App'
import router from './router'
import store from './store'
import db from './datastore'

const ipc = require('electron').ipcRenderer

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(Buefy)
Vue.http = Vue.prototype.$http = axios
Vue.postal = Vue.prototype.$postal = postal
Vue.db = Vue.prototype.$db = db
Vue.config.productionTip = false

//
Vue.postal.subscribe({
  channel: 'orders',
  topic: 'item:add',
  callback: function (data, envelope) {
    console.info('orders:item:add : data : ' + JSON.stringify(data))
    ipc.send('orders:item:add', data)
  }
})
Vue.postal.subscribe({
  channel: 'main',
  topic: 'window:resize',
  callback: function (data, envelope) {
    console.info('window:main:resize : data : ' + JSON.stringify(data))
    // ipc.send('window:main:resize', data)
  }
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
