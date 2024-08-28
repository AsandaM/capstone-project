import { createStore } from 'vuex'
import axios from 'axios'


/*eslint-disable */

export default createStore({
  state: {
    products:null

  },
  getters: {
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    }
  },
  actions: {
   async getProducts({commit}){
      let {data} = await axios.get('http://localhost:5005/products')
      commit('setProducts', data)
      console.log(data);
      
    }
  },
  modules: {
  }
})