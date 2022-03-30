import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  authority: null,
}

const store = new Vuex.Store({
  state,
  getters: {
    authority: (state) => state.authority,
  },
  actions: {
    authority(context, authority) {
      context.commit('authority', authority)
    },
  },
  mutations: {
    authority(state, authority) {
      state.authority = authority
    },
  },
})

export default store
