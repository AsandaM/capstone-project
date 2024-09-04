/*eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue-cookies'
import router from '@/router'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// const { $cookies } = useCookies()

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    products:null, 
    addProduct: null,
    users: null,
    user: null,
    addUser: null,
    userProfile: null,
    cart: null,
    userCart: null

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
    setAddProduct(state, payload){
      state.addProduct = payload
    },
    setCart(state, payload){
      state.cart = payload
    },
    setUserCart(state, payload){
      state.userCart = payload
    },
    setUser(state, payload){
      state.user = payload
    },
    setUsers(state, payload){
      state.users = payload
    },
    setProfile(state, payload){
      state.userProfile = payload
    },
    setAddUser(state, payload){
      state.addUser = payload
    },
    setEditUser(state, payload){
      state.user = payload
    }
  },
  actions: {
   async getProducts({commit}){
      let {data} = await axios.get('http://localhost:5005/products')
      commit('setProducts', data)
      // console.log(data);
      
    },
   async getCart({commit}, userID){
      let {data} = await axios.get(`http://localhost:5005/cart/${userID}`)
      commit('setUserCart', data)
      // console.log(data);
      
    },
   async addToCart({commit}, prodID){

      let {data} = await axios.post('http://localhost:5005/cart', {prodID})
      commit('setCart', data)
      // console.log(data);
      
    },
    async addProduct({commit}, product){
        let {data} = await axios.post('http://localhost:5005/products', product)
        commit('setProducts', data)
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
        let {data} = await axios.get(`http://localhost:5005/users/`)
        commit('setUsers', data)
        // console.log(data);
      },
      async userProfile({commit}){

        let {data} = await axios.get(`http://localhost:5005/users/profile`)
        commit('setProfile', data)
        // console.log(data);
      },
      async addUser({commit}, user){
        let {data} = await axios.post('http://localhost:5005/users/signup', user)
        commit('setUsers', data)
        // console.log(data);
      },
      async login({commit}, user){
        let {data} = await axios.post('http://localhost:5005/users/login', user)
        commit('setAddUser', data)
        console.log(data);
        
        // console.log(data);
        $cookies.set('token', data.token)
        let userRole = JSON.parse(window.atob(data.token.split('.')[1]))
        $cookies.set('userRole', userRole.userRole)
        // $cookies.set('userID', data.userID)
        // console.log(data.userID);
   
        await router.push('/')
        // location.reload()
      },
      async editUser({commit}, data){

        let {userID, info} = data
        
         await axios.patch(`http://localhost:5005/users/${userID}`, info)
        console.log(data);
        console.log(info);
        
        commit('setUsers', data)
      },
      async deleteUser({commit}, userID){
        let {data} = await axios.delete(`http://localhost:5005/users/${userID}`)
        commit('setUsers', data)
        // console.log(data);
      }
      
  },
  modules: {
  }
})