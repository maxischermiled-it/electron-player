import Vue from 'vue'
import axios from 'axios'
import postal from 'postal'

import App from './App'
import router from './router'
import store from './store'
import db from './datastore'

const ipc = require('electron').ipcRenderer

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.postal = Vue.prototype.$postal = postal
Vue.db = Vue.prototype.$db = db
Vue.config.productionTip = false
Vue.postal.subscribe({
  channel: 'orders',
  topic: 'item.add',
  callback: function (data, envelope) {
    // `data` is the data published by the publisher.
    // `envelope` is a wrapper around the data & contains
    // metadata about the message like the channel, topic,
    // timestamp and any other data which might have been
    // added by the sender.
    console.info('Vue.postal : data : ' + JSON.stringify(data))
    ipc.send('orders.item.add', data)
  }
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
