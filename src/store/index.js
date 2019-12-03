import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    changeStatus: (state, payload) => {
      state.status = payload
    },
    setResponse: (state, payload) => {
      state.response = {
        type: payload.type,
        message: payload.message
      }
    },
    saveToken: (state, payload) => {
      state.token = payload
    }
  },


  actions: {
    async signup({commit}, userInfo) { 
      commit('changeStatus', 'pending')      
      try {
          const response = await axios.post('http://localhost:3000/api/register', userInfo);
          console.log(response);
          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          commit('setResponse', responseObject)
      } catch (error) {
        console.log(error.response)
      }

    },

    async login({commit}, userInfo) {
      commit('changeStatus', 'pending')
      try {
        const response = await axios.post('http://localhost:3000/api/login', userInfo);
        console.log(response);
        
        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        
        commit('setResponse', responseObject)
        commit('changeStatus', 'success')
        commit('saveToken', response.data.token)

      } catch (error) {
        console.log(error.response)
      }
    },

    async getItems ({commit}) {
      commit('changeStatus', 'pending')
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        console.log(response);
        
        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        
        commit('setResponse', responseObject)
        commit('changeStatus', 'success')

      } catch (error) {
        console.log(error.response)
      }
    },

    async editItem({commit}, itemInfo) {
      commit('changeStatus', 'pending')
      try {
        const response = await axios.put('http://localhost:3000/api/edit/:id', itemInfo);
        console.log(response);
        
        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        
        commit('setResponse', responseObject)
        commit('changeStatus', 'success')
       

      } catch (error) {
        console.log(error.response)
      }
    },

    async deleteItem({commit}) {
      commit('changeStatus', 'pending')
      try {
        const response = await axios.delete('http://localhost:3000/api/login');
        console.log(response);
        
        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        
        commit('setResponse', responseObject)
        commit('changeStatus', 'success')
  
      } catch (error) {
        console.log(error.response)
      }
    },
  },


  modules: {
  }
})
