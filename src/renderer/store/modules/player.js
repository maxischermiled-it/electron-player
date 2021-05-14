export default {
  namespaced: true,
  state: {
    uuid: 'fad153cd-b9f5-40e1-940e-5d2c7bf411c8',
    computer: 'antonio',
    bounds: { width: 400, height: 300, top: 10, left: 60 },
    weather: { lat: 45.08, long: 7.48 },
    viewers: [{
      index: 1,
      bounds: { width: 400, height: 300, top: 100, left: 180 },
      sequence: 'DEFAULT_SEQUENCE',
      from: null,
      to: null,
      timing: 'ALL_DAY',
      whenNotActive: 'PHOTO'
    },
    {
      index: 2,
      bounds: { width: 400, height: 300, top: 100, left: 180 },
      sequence: 'DEFAULT_SEQUENCE',
      from: null,
      to: null,
      timing: 'ALL_DAY',
      whenNotActive: 'PHOTO'
    }]
  },
  // mutations
  mutations: {
    UPDATE_VIEWER_FIELD (state, params) {
      let v = state.viewers.filter(x => x.index === params.index)
      console.log('v :' + JSON.stringify(v))
      if (v !== null) {
        doUpdate(v[0], params.field, params.value)
      }
    }
  },
  // actions
  actions: {
    updateViewerField (context, params) {
      context.commit('UPDATE_VIEWER_FIELD', params)
    }
  },
  // getters
  getters: {
    bounds: (state) => { return state.bounds },
    viewers: (state) => { return state.viewers }
  }
}

function doUpdate (obj, is, value) {
  console.log('obj :' + JSON.stringify(obj) + ' - is : ' + is)
  if (typeof is === 'string') {
    return doUpdate(obj, is.split('.'), value)
  } else if (is.length === 1 && value !== undefined) {
    obj[is[0]] = value
    return obj[is[0]]
  } else if (is.length === 0) {
    return obj
  } else {
    console.log('obj[is[0]] :' + JSON.stringify(obj[is[0]]))
    return doUpdate(obj[is[0]], is.slice(1), value)
  }
}
