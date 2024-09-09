<template>
  <main>
    <div v-if="userWishlist && userWishlist.length">
      <div class="container" >
        <table>
          <tbody v-for="wishlist in userWishlist" :key="wishlist.wishlistID">
            <tr>
              <td class="product-name">
                <img alt="Pink Funnel Collar Puffer Jacket" class="product-image" height="60"
                  :src="wishlist.image" width="60"/>
                {{wishlist.prodName}}
              </td>
              <td class="quantity">
                <button @click="decreaseQuantity(wishlist)">-</button>
                 <span>{{ wishlist.quantity }}</span>
                <button @click="increaseQuantity(wishlist)">+</button>
              </td>
              <td class="price">
                R{{wishlist.price}}
              </td>
              <td>
                <button class="btn" @click="addToCart(wishlist.prodID)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </button>
                <button class="btn" @click="deleteItem(wishlist)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="clear-all" @click="clearWishlist(wishlist.wishlistID)">Clear All</button>
      </div>
    </div>
    <div v-else class="empty-wishlist">
      <p>Your wishlist is empty. <router-link to="/products">Go shop</router-link></p> 
    </div>
  </main>
</template>

<script>
export default {
  name: 'wishlistComp',
  computed: {
    userWishlist() {
      return this.$store.state.userWishlist;
    },
  },
  methods:{
    getWishlist(){
     this.$store.dispatch('getWishlist', this.userID)
    },
    addToCart(prodID){
      this.$store.dispatch('addToCart', { userID: this.userID, prodID, quantity: 1 });

    },
    clearWishlist(wishlistID){
      this.$store.dispatch('clearWishlist', {wishlistID})
    },
    increaseQuantity(wishlist) {
      const newQuantity = wishlist.quantity + 1;
      this.$store.dispatch('wishlistQuantity', { prodID: wishlist.prodID, quantity: newQuantity });
      this.getWishlist();
    },
    decreaseQuantity(wishlist) {
      console.log(wishlist);
      
      if (wishlist.quantity > 1) {
        const newQuantity = wishlist.quantity - 1;
        this.$store.dispatch('wishlistQuantity', { prodID: wishlist.prodID, quantity: newQuantity });
        this.getWishlist();
      }
    },
    deleteItem(wishlist){
      this.$store.dispatch('deleteWishlistItem', {userID: this.userID, prodID: wishlist.prodID})
      this.getWishlist()
    }
  },
  mounted(){
    this.getWishlist()
  }
};
</script>

<style scoped>
main {
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

.container {
  background-color: #fff;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  display: block;
  text-align: right;
  margin: 8px;
}

th {
  text-transform: uppercase;
  font-size: 14px;
  color: #666;
}

tr {
  border-bottom: 1px solid #0f0e0e;
}

.product-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  vertical-align: middle;
}

.product-name {
  display: flex;
  align-items: center;
}

.product-name img {
  margin-right: 15px;
}

.price {
  font-size: 14px;
  font-weight: bold;
}

.btn {
  color: #074c1a;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
}
 .btn:hover {
  background-color: orange;
}

.clear-all {
  margin-top: 10px;
  color: #073616;
  float: left;
  border: none;
}

.clear-all:hover {
  text-decoration: underline; 
  background-color: orange;
}

.empty-wishlist {
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #666;
}

.empty-wishlist a {
  color: #074c1a;
  text-decoration: none;
}

.empty-wishlist a:hover {
  text-decoration: underline;
}

.quantity{
   margin-top: 17px;
    border: 0.2px solid #4e515085;
    width: 90px;
    padding: 8px;
    border-radius: 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}

.quantity button{
  background: #E0E0E0;
    color: #040404;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 500;
}

@media (max-width: 768px) {

  th,
  td {
    display: block;
    text-align: right;
  }

  th {
    text-align: left;
  }

  td {
    border-top: none;
    border-bottom: 1px solid #eee;
    padding: 10px 5px;
  }

  .product-name {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-name img {
    margin-bottom: 10px;
  }

  .add-to-cart,
  .select-option {
    width: 100%;
    margin-top: 10px;
  }

  .remove {
    margin-top: 10px;
  }
}
</style>