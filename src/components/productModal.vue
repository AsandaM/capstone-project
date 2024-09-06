<template>
    <div class="modal-backdrop" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="$emit('close')">✖</button>
        <div class="d-flex flex-wrap mt-10" id="item">
          <div class="col-12 col-sm-4 p-0" id="img">
            <div class="image-container">
              <div class="image">
                <div class="image-container">
                  <img :src="product.image" alt="product" class="w-100 h-100 object-cover">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-8 mb-4">
            <div class="container h-100 p-sm-4">
              <div class="container d-flex flex-column flex-lg-row align-items-center h-99">
                <div class="w-100">
                  <h1 class="product-name font-weight-bold">
                    {{ product.prodName }}
                  </h1>
                  <div class="w-25 h-2 bg-success my-3"></div>
                  <p class="h5 mb-4">
                    {{ product.benefits }}
                  </p>
                  <h4>R{{ product.price }}</h4>
                  <div class="container text-center">
                    <div class="d-inline p-2">{{ product.calories }} Calories</div>
                    <div class="d-inline p-2">Category: {{ product.category }}</div>
                    <div class="d-inline p-2">Type: {{ product.type }}</div>
                    <div class="accordion accordion-flush mt-2" id="accordionFlushExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Description
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body text-start">{{ product.prodDesc }}</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Instructions
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body text-start">{{ product.instructions }}</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Ingredients
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body text-start">{{ product.ingredients }}</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" @click="addToCart(product.prodID)"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart text-success" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart m-3 text-success" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg></a>
                    <a href="#" @click="navigateToProducts"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-shop text-success" viewBox="0 0 16 16">
                      <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                    </svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      getProducts(){
            this.$store.dispatch('getProducts')
        },
      addToCart(prodID){
            this.$store.dispatch('addToCart', { userID: this.userID, prodID, quantity: this.quantity }) 
        },
        navigateToProducts(){
          this.$emit('close');
          this.$router.push('/products');
        }
    },
  };
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050; /* Ensure it is above other elements */
  }
  
  .modal-content {
    background: rgb(244, 184, 5);
    padding: 20px;
    border-radius: 10px;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 34px;
    cursor: pointer;
    z-index: 1000; /* Ensures it is above other elements */
}

.product-name {
    font-size: 40px;
  }
  
  h4 {
    font-size: 24px;
    margin: 10px 0;
    color: red;
  }
  </style>