/*eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue-cookies'
import router from '@/router'
import { toast } from "vue3-toastify";
import Swal from 'sweetalert2';
import "vue3-toastify/dist/index.css";

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    products: null,
    addProduct: null,
    users: null,
    user: null,
    addUser: null,
    userProfile: null,
    cart: null,
    userCart: null,
    totalCart: null,
    userWishlist: null,
    wishlist: null,
    deliveryFee: 150,
    orders: null

  },
  getters: {
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setDeleteProduct(state, payload) {
      state.products = payload
    },
    setEditProduct(state, payload) {
      state.products = payload
    },
    setAddProduct(state, payload) {
      state.addProduct = payload
    },
    setCart(state, payload) {
      state.cart = payload
    },
    setTotalCart(state, payload) {
      state.totalCart = payload
    },
    setUserCart(state, payload) {
      state.userCart = payload
    },
    setWishlist(state, payload) {
      state.wishlist = payload
    },
    setUserWishlist(state, payload) {
      state.userWishlist = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setUsers(state, payload) {
      state.users = payload
    },
    setProfile(state, payload) {
      state.userProfile = payload
    },
    setAddUser(state, payload) {
      state.addUser = payload
    },
    setEditUser(state, payload) {
      state.user = payload
    },
    setOrders(state, payload) {
      state.orders = payload  
    },
    setInsertToOrder(state, payload) {
      state.orders = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        let { data } = await axios.get('http://localhost:5005/products')
        commit('setProducts', data)
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 3000 });
      }
    },
    async addProduct({ commit }, product) {
      try {
        let { data } = await axios.post('http://localhost:5005/products', product)
        commit('setAddProduct', data)
        Swal.fire({
          icon: 'success',
          title: 'Product Added',
          text: 'You have successfully added a new product to the store.',
          confirmButtonText: 'OK'
        })
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 3000 });
      }
    },
    async deleteProduct({ commit }, prodID) {
      try {
        let { data } = await axios.delete(`http://localhost:5005/products/${prodID}`)
        commit('setDeleteProduct', data)
        Swal.fire({
          icon: 'success',
          title: 'Product Deleted',
          text: 'You have successfully deleted the product from the store.',
          confirmButtonText: 'OK'
        });
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 3000 });
      }
    },
    async editProduct({ commit }, product) {
      try {
        let { data } = await axios.patch(`http://localhost:5005/products/${product.prodID}`, product)
        commit('setEditProduct', data)
        Swal.fire({
          icon: 'success',
          title: 'Product Updated',
          text: 'You have successfully updated the product.',
          confirmButtonText: 'OK'
        });
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },

    // cart actions
    async getCart({ commit }, userID) {
      try {
        let { data } = await axios.get(`http://localhost:5005/cart/${userID}`)

        let cartItems = Array.isArray(data) ? data : [];
        
        let totalCart = await cartItems.reduce((acc, item) => {
          let total = (acc + item.price * item.quantity)
           return total + this.state.deliveryFee
         }, 0).toFixed(2)

          commit('setUserCart', data)
          commit('setTotalCart', totalCart)
      } catch (e) {
        toast.error(`${e.data.message}`, { autoClose: 5000 }); 
      }
    },
    async addToCart({commit}, data) { 
      try {
        let {userID, prodID,  quantity } = data
        
        await axios.post('http://localhost:5005/cart', {userID, prodID,  quantity })
        commit('setCart', data)

        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Product added to cart',
            showConfirmButton: false,
            timer: 3000
        }).then(() => {
            router.push('/products')
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `${data.err}`,
          confirmButtonText: 'OK'
        })
      }
          
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
        console.log(e);
      }
    },
    async updateQuantity({ commit }, data) {
      try {
        let { prodID, userID, quantity } = data
        await axios.patch(`http://localhost:5005/cart/${prodID}`, { userID, quantity })
        commit('setCart', data)
      } catch (e) {
        console.log(e);
        
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async deleteCartItem({ commit }, data) {
      try {
        let { prodID, userID } = data
        await axios.delete(`http://localhost:5005/cart/${userID}/${prodID}`)
        commit('setCart', data)
        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Product removed from cart',
            showConfirmButton: false,
            timer: 3000
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },

    // wishlist actions
    async getWishlist({ commit }, userID) {
      try {
        let { data } = await axios.get(`http://localhost:5005/wishlist/${userID}`)
        commit('setUserWishlist', data)

      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async addToWishlist({ commit }, data) {
      try {
        let { userID, prodID, quantity } = data
        await axios.post('http://localhost:5005/wishlist', { userID, prodID, quantity })
        commit('setWishlist', data)
        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Product added to wishlist',
            showConfirmButton: false,
            timer: 3000
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async deleteWishlistItem({ commit }, data) {
      try {
        let { prodID, userID } = data
        await axios.delete(`http://localhost:5005/wishlist/${userID}/${prodID}`, { data: { userID } })
        commit('setWishlist', data)
        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Product removed from wishlist',
            showConfirmButton: false,
            timer: 3000
          })
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async updateWishlist({ commit }, data) {
      try {
        let { prodID, userID, quantity } = data
        await axios.patch(`http://localhost:5005/wishlist/${prodID}`, { userID, quantity })
        commit('setWishlist', data)
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async clearWishlist({ commit }, {wishlistID}) {
      try {
        await axios.delete(`http://localhost:5005/wishlist/${wishlistID}`)
        commit('setWishlist', null)
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async wishlistQuantity({ commit }, data) {
      console.log(data);
      
      try {
        let { prodID, userID, quantity } = data
        await axios.patch(`http://localhost:5005/wishlist/${prodID}`, { userID, quantity })
        commit('setWishlist', data)
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },


    // users actions
    async getUsers({ commit }) {
      try {
        let { data } = await axios.get(`http://localhost:5005/users/`)
        commit('setUsers', data)
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async userProfile({ commit }) {
      try {
        let { data } = await axios.get(`http://localhost:5005/users/profile`)
        commit('setProfile', data)
        if(data.err){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async addUser({ commit }, user) {
      try {
        let { data } = await axios.post('http://localhost:5005/users/signup', user)
        commit('setAddUser', data)
        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Account Created',
            text: `${data.message}`,
            confirmButtonText: 'OK'
          })
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async login({ commit }, user) {
      try {
        let data = await (await axios.post('http://localhost:5005/users/login', user)).data
        commit('setAddUser', data)
        if(!data.err) {
          $cookies.set('token', data.token)
          let userRole = JSON.parse(window.atob(data.token.split('.')[1]))
          $cookies.set('userRole', userRole.userRole)
          Swal.fire({
            icon: 'success',
            title: `${data.message}`,
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            location.reload()
            router.push('/');
          });
        }else {
          Swal.fire({
            icon: 'err',
            title: `${data.err}`,
            showConfirmButton: false,
            timer: 2000
          })
        }


      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
        
      }
    },
    async updateProfile({ commit }, data) {
      try {
        let { userID, info } = data
        await axios.patch(`http://localhost:5005/users/${userID}`, info)
        commit('setUsers', data)
        $cookies.set('userRole', info.userRole)
        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Profile Updated',
            text: 'You have successfully updated your profile.',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          }).then(() => {
            this.$router.push('/');
          });
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
        
      }
    },
    async editUser({ commit }, user) {
      
      try {
        let {data} = await axios.patch(`http://localhost:5005/users/${user.userID}`, user)
        commit('setEditUser', data)
        Swal.fire({
          icon: 'success',
          title: 'User Updated',
          text: 'You have successfully updated the user.',
          confirmButtonText: 'OK'
        });
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
        
      }
    },
    async deleteUser({ commit }, userID) {
      try {
        let { data } = await axios.delete(`http://localhost:5005/users/${userID}`)
        commit('setUsers', data)
        if(!data.err){
          Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this account!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your account has been deleted.',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                this.$router.push('/');
                this.$cookies.remove('token');
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire({
                title: 'Cancelled',
                text: 'Your account is safe :)',
                icon: 'error',
                confirmButtonText: 'OK'
              });
            }
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
    async updatePassword({ commit }, { userPass, emailAdd }) {
      try {
        let  {data} = await axios.patch(`http://localhost:5005/users//updatepassword`, { userPass, emailAdd })
        commit('setUsers', data)
        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Password Updated',
            text: `${data.message}`,
            confirmButtonText: 'OK'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response ? e.response.data.message : e.message}`, { autoClose: 5000 });
      }
    },


    // orders actions

    async getOrders({ commit }) {
      try {
        let { data } = await axios.get(`http://localhost:5005/orders`)
        commit('setOrders', data)
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },

    async insertToOrder({ commit }, data) {
      console.log(data);
      try {
        let {userID, info} = data
        await axios.post('http://localhost:5005/orders', {userID, info})
        commit('setInsertToOrder', data)
        if(!data.err){
          Swal.fire({
            icon: 'success',
            title: 'Order Placed',
            text: 'You have successfully placed an order.',
            confirmButtonText: 'OK'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${data.err}`,
            confirmButtonText: 'OK'
          })
        }
      } catch (e) {
        toast.error(`${e.response.data.message}`, { autoClose: 5000 });
      }
    },
  },
  modules: {
  }
})