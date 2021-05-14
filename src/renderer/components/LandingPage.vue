<template>
  <div id='wrapper container is-fluid'>
    <b-tabs
      type="boxed is-toggle"
      position='is-right'
      expanded  boxed
    >
      <b-tab-item 
        v-for="viewer in viewers"
        :key="viewer.index"
        v-bind:label=" 'Screen #' + (viewer.index )" 
      >
        <dimension-card :viewer="viewer"></dimension-card>
        <dimension-card :viewer="viewer"></dimension-card>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import DimensionCard from './LandingPage/DimensionCard'

export default {
  components: {DimensionCard},
  data () {
    return {
      subscrDimensionCardiption: null,
      expandOnHover: false,
      mobile: 'reduce',
      reduce: true
    }
  },
  computed: {
    viewers () { return this.$store.getters['player/viewers'] }
  },
  // computed: {
  //   viewers: {
  //     get () {
  //       return this.$store.getters['player/viewers']
  //     },
  //     set (e) {
  //       this.store.commit('player/updateViewers', e)
  //     }
  //   }
  // },
  // watch: {
  //   viewers (newValue, oldValue) {
  //     console.log(`We have ${newValue} viewers, yay!`)
  //   }
  // },
  methods: {
    onChange (index, field, value) {
      var params = {
        index: index,
        field: field,
        value: value
      }
      console.info(`changed bounds :` + JSON.stringify(params))
      this.$store.dispatch('player/updateViewerField', params)
    }
  }
}
</script>
<style>
</style>
