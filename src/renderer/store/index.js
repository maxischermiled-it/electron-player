import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import player from './modules/player'
import viewer from './modules/viewer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    player,
    viewer
  },
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
