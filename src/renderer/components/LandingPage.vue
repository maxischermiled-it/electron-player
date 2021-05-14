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
        v-bind:label=" 'Screen #' + (viewer.index + 1)" 
      >
        <div class="card">
          <header class="card-header"><p class="card-header-title">Dimensions</p></header>
          <div class="card-content columns">
            <div class="column is-half">
              <div class="card">
                <header class="card-header"><p class="card-header-title">Size</p></header>
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column is-half">
                        <b-field label="width">
                          <b-numberinput controls-position="compact" controls-rounded :value="viewer.bounds.width" @input="onChange(viewer.index, 'bounds.width', $event)"></b-numberinput>
                        </b-field>
                      </div>
                      <div class="column is-half">
                        <b-field label="height">
                          <b-numberinput controls-position="compact" controls-rounded :value="viewer.bounds.height" @input="onChange(viewer.index, 'bounds.height', $event)"></b-numberinput>
                        </b-field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="card">
                <header class="card-header"><p class="card-header-title">Poistion</p></header>
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column is-half">
                        <b-field label="top">
                          <b-numberinput controls-position="compact" controls-rounded :value="viewer.bounds.top" @input="onChange(viewer.index, 'bounds.top', $event)"></b-numberinput>
                        </b-field>
                      </div>
                      <div class="column is-half">
                        <b-field label="left">
                           <b-numberinput controls-position="compact" controls-rounded :value="viewer.bounds.left" @input="onChange(viewer.index, 'bounds.left', $event)"></b-numberinput>
                        </b-field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>

export default {
  data () {
    return {
      subscription: null,
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
