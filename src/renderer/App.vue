<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'electron-player',
  data () {
    return {
      subscription: null
    }
  },
  mounted () {
    this.subscription = this.$postal.subscribe({
      channel: 'orders',
      topic: 'item.add',
      callback: function (data, envelope) {
        // `data` is the data published by the publisher.
        // `envelope` is a wrapper around the data & contains
        // metadata about the message like the channel, topic,
        // timestamp and any other data which might have been
        // added by the sender.
        console.info('data : ' + JSON.stringify(data))
      }
    })
  }
}
</script>

<style>
/* CSS */
</style>
