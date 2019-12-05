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
    token: localStorage.getItem('access_token') || null,

    items: [],
    item: []

  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    apiResponse: state => state.response,
    getItems: state => state.items,
    getItem: state => state.item
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

    setItem (state, item) {
      state.item = item
    },

    newItem(state, item) {
      state.items.unshift(item)
    },

    removeItem(state, id) {
      state.items = state.items.filter(function(item) {
        return item._id != id;
      })
    },

    editItem(state, id) {
      state.items = state.items.filter(function(item) {
        return item._id == id
      })
    },

    retrieveToken(state, token) {
      state.token = token
    },

    destroyToken(state) {
      state.token = null
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
          console.log(response);
          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          const token = response.data.token
          
          localStorage.setItem('access_token', token)
          commit('retrieveToken', token)
          commit('setResponse', responseObject)
          console.log(responseObject);
          console.log(token);
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

    async fetchItem ({commit}, id) {
      try {
        const response = await axios.get(`http://localhost:3000/api/item/${id}`);
        console.log(response.data);
        
        commit('setItems', response.data.data)

      } catch (error) {
        console.log(error.response)
      }
    },

    async editItem({commit}, id, itemInfo) {
      
      try {
        const response = await axios.put(`http://localhost:3000/api/edit/${id}`, itemInfo);
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
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:3000/api/add', itemInfo);
        commit('newItem', itemInfo)
        console.log(response);

      } catch (error) {
        console.log(error.response)
      }
    },

    async deleteItem({commit}, id) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.delete(`http://localhost:3000/api/delete/${id}`);
        console.log(response);
        
        commit('removeItem', id);
      } catch (error) {
        console.log(error.response)
      }
    },

    logout({commit}) {
      localStorage.removeItem('access_token')
      commit('destroyToken')
    }
  },


  modules: {
  }
})
