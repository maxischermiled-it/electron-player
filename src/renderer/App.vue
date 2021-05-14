<template>
  <div id='app' class="container is-fluid">
    
      <app-header></app-header>
      <div class="container is-fluid">        
        <router-view></router-view>
      </div>      
    
  </div>
</template>

<script>

import AppHeader from './AppHeader'

export default {
  name: 'electron-player',
  components: {AppHeader},
  data () {
    return {
      subscription: null,
      expandOnHover: false,
      mobile: 'reduce',
      reduce: true
    }
  },
  mounted () {
    this.subscription = this.$postal.subscribe({
      channel: 'orders',
      topic: 'item:add',
      callback: function (data, envelope) {
        // `data` is the data published by the publisher.
        // `envelope` is a wrapper around the data & contains
        // metadata about the message like the channel, topic,
        // timestamp and any other data which might have been
        // added by the sender.
        console.info('data : ' + JSON.stringify(data))
      }
    })
    this.$postal.publish({
      channel: 'main',
      topic: 'window:resize',
      data: this.bounds
    })
  },
  computed: {
    bounds () {
      return this.$store.getters['player/bounds']
    }
  },
  watch: {
    bounds (newValue, oldValue) {
      console.log(`We have ${newValue} fruits now, yay!`)
    }
  },
  methods: {

    clickMe () {
    }

  }

}
</script>

<style lang="scss">
</style>
