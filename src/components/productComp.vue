<template>
  <!-- products section -->
  <div class="products" id="products">
    <div class="section-products">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-6">
            <div class="header2">
              <h2 class="display-4 display-lg-2 font-weight-bold mt-3">
                Juice and Smoothies for a <br><span class="text-success">Healthier</span> You!
              </h2>
              <div class="w-35 h-2 bg-success my-3"></div>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <!-- Search Option on the Left -->
          <div class="col-md-4 mb-3">
            <input type="text" class="form-control" placeholder="Search..." v-model="searchQuery" />
          </div>
          <!-- Empty Column to Push Sort and Filter to the Right -->
          <div class="col-md-4"></div>
          <!-- Sort and Filter Options on the Right -->
          <div class="col-md-4 d-flex justify-content-end mb-3">
            <!-- Sort Option -->
            <select class="form-select me-2 text-success" aria-label="Sort by" v-model="sortOption">
              <option value="">Sort by</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
            <!-- Filter by Category Option -->
            <select class="form-select me-2 text-success" aria-label="Filter by Category" v-model="filterCategory">
              <option value="">Filter by Category</option>
              <option value="Detox">Detox</option>
              <option value="Immune Boost">Immune Boost</option>
              <option value="Energize">Energizer</option>
            </select>
            <select class="form-select me-2 text-success" aria-label="Filter by Type" v-model="filterType">
              <option value="">Filter by Type</option>
              <option value="Juice">Juice</option>
              <option value="Smoothie">Smoothies</option>
            </select>
          </div>
        </div>
        <productModal v-if="isModalOpen" :product="selectedProduct" @close="closeModal"></productModal>
        <div class="row" v-if="filteredAndSortedProducts.length > 0">
          <!-- Single Product -->
          <div v-for="product in filteredAndSortedProducts" :key="product.id" class="col-md-6 col-lg-4 col-xl-3">
            <div :id="'product-' + product.prodID" class="single-product">
              <div class="part-1" :style="getProductStyle(product)">
                <!-- <img :src="product.image" alt=""> -->
                <ul>
                  <li @click="addToCart(product.prodID)"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path
                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                      </svg></a></li>
                  <li @click="addToWishlist(product.prodID)"><a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg></a></li>
                  <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-plus" viewBox="0 0 16 16">
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg></a></li>
                  <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrows-angle-expand" viewBox="0 0 16 16" @click="openModal(product)">
                        <path fill-rule="evenodd"
                          d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" />
                      </svg></a></li>
                </ul>
              </div>
              <div class="part-2">
                <h3 class="product-title text-black">{{ product.prodName }}</h3>
                <h4 class="text-black fw-bold">R{{ product.price }}</h4>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="!$store.state.products">
          <spinnerComp />
        </div>
        <div v-else-if="searchQuery && productNotFound">
          <div class="container1">
            <div class="boo-wrapper">
              <div class="boo">
                <div class="face">🙁</div>
              </div>
              <div class="shadow"></div>

              <h1>Whoops!</h1>
              <p>
                We couldn't find the item you
                <br />
                were looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productModal from './productModal.vue';
import spinnerComp from './spinnerComp.vue';
import Swal from 'sweetalert2';
export default {
  components: {
    productModal,
    spinnerComp
  },
  data() {
    return {
      searchQuery: '',
      sortOption: '',
      filterCategory: '',
      filterType: '',
      isModalOpen: false,
      selectedProduct: null,
      isLoading: true
    };
  },
  computed: {
    filteredAndSortedProducts() {
      let filteredProducts = this.$store.state.products || [];

      // Filter by search query
      if (this.searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      // Filter by category
      if (this.filterCategory) {
        filteredProducts = filteredProducts.filter(product =>
          product.category === this.filterCategory
        );
      }
      // Filter by type
      if (this.filterType) {
        filteredProducts = filteredProducts.filter(product =>
          product.type === this.filterType
        );
      }

      // Sort products
      if (this.sortOption === 'priceAsc') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOption === 'priceDesc') {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortOption === 'newest') {
        filteredProducts.sort((a, b) => b.prodID - a.prodID);
      }

      return filteredProducts;
    },
    productNotFound() {
      return this.filteredAndSortedProducts.length === 0;
    }
  },
  methods: {
    getProducts() {
      this.$store.dispatch('getProducts')
      this.isLoading = false;
    },
    getProductStyle(product) {
      return {
        backgroundImage: `url(${product.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'all 0.3s',
      }
    },
    checkLogin(){
      return !!this.$cookies.get('token')
    },
    addToCart(prodID) {
      if(this.checkLogin()){
        this.$store.dispatch('addToCart', { userID: this.userID, prodID, quantity: 1 });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to be logged in to add to cart!',
        })
      }
    },
    openModal(product) {
      this.selectedProduct = product
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.selectedProduct = null
    },
    addToWishlist(prodID) {
      if(this.checkLogin()){
        this.$store.dispatch('addToWishlist', { userID: this.userID, prodID, quantity: 1 });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to be logged in to add to wishlist!',
        })
      }
    }, 
  },
  mounted() {
    this.getProducts()

  },

};
</script>


<style scoped>
/* products */
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');

*,
*:before,
*:after {
  box-sizing: border-box;
}

.section-products {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Muli";
  padding: 0;
  background-image: url('https://asandam.github.io/images/images_capstone/p9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.products>p {
  padding: 15px;
  text-transform: uppercase;
}

.part-1 img{
  width: 70%;
  height: 100%;
}
.products>h2 {
  font-size: 40px;
  width: 40%;
  text-align: center;
  margin-top: 50px;
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}

.section-products {
  padding: 5px 0 54px;
}

.section-products .header2 {
  margin-bottom: 50px;
}

.section-products .header2 h3 {
  font-size: 1rem;
  color: #fe302f;
  font-weight: 500;
}

.section-products .header2 h2 {
  font-size: 2.2rem;
  font-weight: 400;
  color: #444444;
}

.section-products .single-product {
  margin-bottom: 26px;
}

.section-products .single-product .part-1 {
  position: relative;
  height: 290px;
  max-height: 290px;
  margin-bottom: 20px;
  overflow: hidden;
  z-index: 2;
  background-size: cover;
  background-position: center;
}

.section-products .single-product .part-1::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.3s;
}

.section-products .single-product .part-1 ul {
  position: absolute;
  bottom: -41px;
  left: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
  opacity: 0;
  transition: bottom 0.5s, opacity 0.5s;
}

.section-products .single-product:hover .part-1 ul {
  bottom: 30px;
  opacity: 1;
}

.section-products .single-product .part-1 ul li {
  display: inline-block;
  margin-right: 4px;
}

.section-products .single-product .part-1 ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  color: #444444;
  text-align: center;
  box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
  transition: color 0.2s;
}

.section-products .single-product .part-1 ul li a:hover {
  color: #fe302f;
}

.section-products .single-product .part-2 .product-title {
  font-size: 1rem;
}

.section-products .single-product .part-2 h4 {
  display: inline-block;
  font-size: 1rem;
}

.container {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);

}

.form-select {
  width: 205px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
}

.form-control {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
}


/* Media query for screens 560px and below */
@media (max-width: 1125px) {
  .col-md-4.d-flex {
    flex-direction: column;
    align-items: flex-start;
  }

  .col-md-4.d-flex .form-select {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media (min-width: 324px) and (max-width: 768px) {
  .product-image-container {
    background-size: cover; /* Zoom effect */
  }
}

@media (min-width: 768px) {
  .product-image-container {
    background-size: contain; /* Contain the image on larger screens */
  }
}


@keyframes floating {
  0% {
    transform: translate3d(0, 0, 0);
  }

  45% {
    transform: translate3d(0, -10%, 0);
  }

  55% {
    transform: translate3d(0, -10%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes floatingShadow {
  0% {
    transform: scale(1);
  }

  45% {
    transform: scale(0.85);
  }

  55% {
    transform: scale(0.85);
  }

  100% {
    transform: scale(1);
  }
}


.container1 {
  font-family: 'Varela Round', sans-serif;
  color: #141515;
  position: relative;
  height: 70vh;
  text-align: center;
  font-size: 18px;
}

.container1 h1 {
  font-size: 32px;
  margin-top: 32px;
}

.boo-wrapper {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 64px;
  padding-bottom: 64px;
}

.boo {
  width: 160px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 0;
  overflow: hidden;
  animation: floating 3s ease-in-out infinite;
  position: relative;
}

.boo::after {
  content: '';
  display: block;
  position: absolute;
  left: -18.82px;
  bottom: -8.31px;
  width: calc(100% + 32px);
  height: 12px;
}

.boo .face {
  width: auto;
  height: auto;
  background: none;
  font-size: 48px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  line-height: 1;
}


.boo .face::before,
.boo .face::after {
  content: none;
}


.boo .face::before {
  left: -24px;
}

.boo .face::after {
  right: -24px;
}

.shadow {
  width: 128px;
  height: 16px;
  background-color: rgba(237, 237, 237, 0.75);
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  animation: floatingShadow 3s ease-in-out infinite;
}
</style>