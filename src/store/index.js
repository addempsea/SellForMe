import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    response: {
      type: "",
      message: ""
    },

    items: []

  },

  getters: {
    apiResponse: state => state.response,
    getItems: state => state.items
  },

  mutations: {
    setResponse: (state, payload) => {
      state.response = {
        type: payload.type,
        message: payload.message
      }
    },

    setItems (state, items) {
      state.items = items;
    },

    newItem(state, item) {
      state.items.unshift(item)
    },
  },


  actions: {
    async signup({commit}, userInfo) {       
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
      try {
        const response = await axios.post('http://localhost:3000/api/login', userInfo);
        
        if (response.status == 200) {
  
          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          commit('setResponse', responseObject)
          console.log(responseObject);
        }

      

      } catch (error) {
        console.log(error.response)
      }
    },
    
    async fetchItems ({commit}) {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        commit('setItems', response.data.data)

      } catch (error) {
        console.log(error.response)
      }
    },

    async editItem({commit}, itemInfo) {
      
      try {
        const response = await axios.put('http://localhost:3000/api/edit/:id', itemInfo);
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

    async addItem({commit}, itemInfo) {
      try {
        const response = await axios.post('http://localhost:3000/api/add', itemInfo);
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
