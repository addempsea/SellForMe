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

    removeItem(state, id) {
      state.items = state.items.filter(function(item) {
        return item.id != id;
      })
    }
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
        commit('newItem', itemInfo)
        console.log(response);

      } catch (error) {
        console.log(error.response)
      }
    },

    async deleteItem({commit}, id) {
      try {
        await axios.delete(`http://localhost:3000/api/delete/${id}`);
        commit('removeItem', id);
      } catch (error) {
        console.log(error.response)
      }
    },
  },


  modules: {
  }
})
