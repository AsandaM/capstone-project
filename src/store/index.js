import { createStore } from 'vuex'
import axios from 'axios'


/*eslint-disable */

export default createStore({
  state: {
    products:null, 
    cart: null

  },
  getters: {
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    },
    setCart(state, payload){
      state.cart = payload
    }
  },
  actions: {
   async getProducts({commit}){
      let {data} = await axios.get('http://localhost:5005/products')
      commit('setProducts', data)
      console.log(data);
      
    },
   async addToCart({commit}, prodID){
      let {data} = await axios.post('http://localhost:5005/products/cart', {prodID})
      commit('setCart', data)
      console.log(data);
      
    }
  },
  modules: {
  }
})