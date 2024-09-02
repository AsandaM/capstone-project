/*eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue-cookies'
import router from '@/router'

// const { $cookies } = useCookies()

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')




export default createStore({
  state: {
    products:null, 
    users: null,
    cart: null,
    addProduct: null,
    addUser: null,

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
    setCart(state, payload){
      state.cart = payload
    },
    setAddProduct(state, payload){
      state.addProduct = payload
    },
    setUsers(state, payload){
      state.users = payload
    },
    setAddUser(state, payload){
      state.addUser = payload
    }
  },
  actions: {
   async getProducts({commit}){
      let {data} = await axios.get('http://localhost:5005/products')
      commit('setProducts', data)
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
      async getUsers({commit}){
        let {data} = await axios.get('http://localhost:5005/users')
        commit('setUsers', data)
        // console.log(data);
      },
      async addUser({commit}, user){
        let {data} = await axios.post('http://localhost:5005/users/signup', user)
        commit('setAddUsers', data)
        // console.log(data);
      },
      async login({commit}, user){
        let {data} = await axios.post('http://localhost:5005/users/login', user)
        commit('setAddUser', data)
        console.log(data);
        $cookies.set('token', data.token)
        let userRole = JSON.parse(window.atob(data.token.split('.')[1]))
        $cookies.set('userRole', userRole.userRole)
        console.log(userRole.userRole);
        console.log(userRole.userRole == 'user');
        
        

        await router.push('/')
        // location.reload()
      }
  },
  modules: {
  }
})