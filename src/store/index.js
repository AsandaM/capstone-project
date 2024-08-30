import { createStore } from 'vuex'
import axios from 'axios'


/*eslint-disable */

export default createStore({
  state: {
    products:null, 
    users: null,
    cart: null,
    addProduct: null

  },
  getters: {
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    },
    setDeleteProduct(state, payload){
      state.products = payload
    },
    setEditProduct(state, payload){
      state.products = payload
    },
    setUsers(state, payload){
      state.users = payload
    },
    setCart(state, payload){
      state.cart = payload
    },
    setAddProduct(state, payload){
      state.addProduct = payload
    },
    setAddPackage(state, payload){
      state.addPackage = payload
    }
  },
  actions: {
   async getProducts({commit}){
      let {data} = await axios.get('http://localhost:5005/products')
      commit('setProducts', data)
      // console.log(data);
      
    },
   async getUsers({commit}){
      let {data} = await axios.get('http://localhost:5005/users')
      commit('setUsers', data)
      // console.log(data);
      
    },
   async addToCart({commit}, prodID){
      let {data} = await axios.post('http://localhost:5005/products/cart', {prodID})
      commit('setCart', data)
      // console.log(data);
      
    },
    async addProduct({commit}, product){
        let {data} = await axios.post('http://localhost:5005/products', product)
        commit('setAddProduct', data)
        // console.log(data);
        
      },
      async addPackage({commit}, info){
        let {data} = await axios.post('http://localhost:5005/products/package', info)
        commit('setAddPackage', data)
        // console.log(data);
        
      },
      async deleteProduct({commit}, prodID){
        let {data} = await axios.delete(`http://localhost:5005/products/${prodID}`)
        commit('setDeleteProduct', data)
        // console.log(data);
      },
      async editProduct({commit}, product){
        let {data} = await axios.patch(`http://localhost:5005/products/${product.prodID}`, product)
        commit('setEditProduct', data)
        // console.log(data);
      },
  },
  modules: {
  }
})