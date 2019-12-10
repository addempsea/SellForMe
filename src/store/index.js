import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    response: {
      type: "",
      message: ""
    },
    responseAdd: {
      type: "",
      message: ""
    },
    responseReg: {
      type: "",
      message: ""
    },
    responseEd: {
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
    apiResponseReg: state => state.responseReg,
    apiResponseAdd: state => state.responseAdd,
    apiResponseEd: state => state.responseEd,
    
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

    setResponseAdd: (state, payload) => {
      state.responseAdd = {
        type: payload.type,
        message: payload.message
      }
    },
    setResponseReg: (state, payload) => {
      state.responseReg = {
        type: payload.type,
        message: payload.message
      }
    },
    setResponseEd: (state, payload) => {
      state.responseEd = {
        type: payload.type,
        message: payload.message
      }
    },

    setItems(state, items) {
      state.items = items;
    },

    setItem(state, item) {
      state.item = item
    },

    newItem: (state, item) => {
      state.items.unshift(item)
    },

    removeItem(state, id) {
      state.items = state.items.filter(function (item) {
        return item._id != id;
      })
    },

    searchItem(state, query) {
      let x = query.toLowerCase();
      let result = state.items.filter(function(item) {
        return item.name.toLowerCase().includes(x);
      });
      state.item = result
    },

    retrieveToken(state, token) {
      state.token = token
    },

    destroyToken(state) {
      state.token = null
    }
  },


  actions: {
    async signup({ commit }, userInfo) {
      try {
        const response = await axios.post('https://sellforme-api.herokuapp.com/api/register', userInfo);
       
        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        commit('setResponseReg', responseObject)
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        commit('setResponseReg', responseObject)
       
      }
    },

    async login({ commit }, userInfo) {
      try {
        const response = await axios.post('https://sellforme-api.herokuapp.com/api/login', userInfo);
        if (response.status == 200) {
         
          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          const token = response.data.token
          localStorage.setItem('access_token', token)
          commit('retrieveToken', token)
          commit('setResponse', responseObject)
         
        }
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        commit('setResponse', responseObject)
       
      }
    },

    async fetchItems({ commit }) {
      try {
        const response = await axios.get('https://sellforme-api.herokuapp.com/api/items');
        commit('setItems', response.data.data)

      } catch (error) {
        commit('setItems', error.response)
      }
    },

    async fetchItem({ commit }, id) {
      try {
        const response = await axios.get(`https://sellforme-api.herokuapp.com/api/item/${id}`);
       

        commit('setItems', response.data.data)

      } catch (error) {
        commit('setItems', error.response)
      }
    },

    async editItem({ commit },  itemInfo) {
      try {
        const response = await axios.put(`https://sellforme-api.herokuapp.com/api/edit/${itemInfo._id}`, itemInfo);
        

        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        commit('setResponseEd', responseObject)
       
  
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        commit('setResponseEd', responseObject)
      }
    },

    async addItem({ commit }, itemInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('https://sellforme-api.herokuapp.com/api/add', itemInfo);
        commit('newItem', itemInfo)
        
        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        commit('setResponseAdd', responseObject)

      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        commit('setResponseAdd', responseObject)
      }
    },

    async deleteItem({ commit }, id) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        await axios.delete(`https://sellforme-api.herokuapp.com/api/delete/${id}`); 

        commit('removeItem', id);
      } catch (error) {
        alert(error.response.data.message)
      }
    },

    logout({ commit }) {
      axios.defaults.headers.common['Authorization'] = {}
      localStorage.removeItem('access_token')
      commit('destroyToken')
    },

    search({commit}, query) {
      commit('searchItem', query)
      
    }
  },
  modules: {
  }
})