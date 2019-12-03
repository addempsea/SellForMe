import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: "",
    response: {
      type: "",
      message: ""
    },
    token: ""
  },

  getters: {
    currentStatus: state => state.status,
    apiResponse: state => state.response,
    userToken: state => state.token
  },

  mutations: {
  },


  actions: {
  },


  modules: {
  }
})
