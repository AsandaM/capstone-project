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
                          <div class="accordion-body">{{ product.prodDesc }}</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Instructions
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">{{ product.instructions }}</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Ingredients
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">{{ product.ingredients }}</div>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="btn bg-success m-3">Add To Cart</a>
                    <a href="#" class="btn bg-success me-3">Add to Wishlist</a>
                    <a href="#" class="btn bg-success">Continue Shopping</a>
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
    data() {
      return {};
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