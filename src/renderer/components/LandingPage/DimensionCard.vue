<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Dimensions</p>
    </header>
    <div class="card-content columns">
      <div class="column is-half">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Size</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="width">
                    <b-numberinput
                      controls-position="compact"
                      controls-rounded
                      :value="viewer.bounds.width"
                      @input="onChange('bounds.width', $event)"
                    ></b-numberinput>
                  </b-field>
                </div>
                <div class="column is-half">
                  <b-field label="height">
                    <b-numberinput
                      controls-position="compact"
                      controls-rounded
                      :value="viewer.bounds.height"
                      @input="onChange('bounds.height', $event)"
                    ></b-numberinput>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Poistion</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="top">
                    <b-numberinput
                      controls-position="compact"
                      controls-rounded
                      :value="viewer.bounds.top"
                      @input="onChange('bounds.top', $event)"
                    ></b-numberinput>
                  </b-field>
                </div>
                <div class="column is-half">
                  <b-field label="left">
                    <b-numberinput
                      controls-position="compact"
                      controls-rounded
                      :value="viewer.bounds.left"
                      @input="onChange('bounds.left', $event)"
                    ></b-numberinput>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    viewer: Object
  },
  data () {
    return {
      index: this.viewer.index
    }
  },
  methods: {
    onChange (field, value) {
      var params = {
        index: this.index,
        field: field,
        value: value
      }
      console.log('changed bounds :' + JSON.stringify(params))
      this.$store.dispatch('player/updateViewerField', params)
    }
  }
}
</script>

<style>
</style>