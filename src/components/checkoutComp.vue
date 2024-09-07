<template>
    <div class="checkout">
        <header class="header">
            <h1 class="display-4 display-lg-2 font-weight-bold text-success text-start ms-5">Checkout</h1>
        </header>    
        <main class="main" v-if="userCart && userCart.length > 0">
            <div class="checkout-container">
                <section class="checkout-form">
                    <form action="#!" method="get" id="form">
                        <h6>Contact information</h6>
                        <div class="form-control">
                            <label for="checkout-email font-weight-bold">Email</label>
                            <div>
                                <input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email address">
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="checkout-phone">Phone</label>
                            <div>
                                
                                <input type="tel" name="checkout-phone" id="checkout-phone" placeholder="Enter you phone number">
                            </div>
                        </div>
                        <br>
                        <h6>Shipping address</h6>
                        <div class="form-control">
                            <label for="checkout-name">Full name</label>
                            <div>
                                <input type="text" id="checkout-name" name="checkout-name" placeholder="Enter you name">
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="checkout-address">Address</label>
                            <div>
                                <input type="text" name="checkout-address" id="checkout-address" placeholder="Your address">
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="checkout-city">City</label>
                            <div>
                                <input type="text" name="checkout-city" id="checkout-city" placeholder="Your city">
                            </div>
                        </div>
                        <div class="form-control checkbox-control">
                            <input type="checkbox" name="checkout-checkbox" id="checkout-checkbox">
                            <label for="checkout-checkbox">Save this information for next time</label>
                        </div>
                        <div class="form-control-btn">
                            <button class="btn btn-success text-white h4 font-weight-medium px-3 py-2 rounded shadow">Continue</button>
                        </div>
                    </form>
                </section>
                <section class="checkout-details">
                    <div class="checkout-details-inner">
                        <div class="checkout-lists">
                            <div class="card" v-for="cart in userCart" :key="cart.cartID">
                                <div class="card-image"><img :src="cart.image" alt=""></div>
                                <div class="card-details">
                                    <div class="card-name">{{ cart.prodName }}</div>
                                    <div class="card-price text-success">{{ cart.price }}</div>
                                    <div class="card-wheel">
                                        <button @click="decreaseQuantity(cart)">-</button>
                                        <span>{{cart.quantity}}</span>
                                        <button @click="increaseQuantity(cart)">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="checkout-shipping">
                            <h6>Delivery</h6>
                            <p>R19</p>
                        </div>
                        <div class="checkout-total">
                            <h6>Total</h6>
                            <p>R {{ totalCart }}</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <div class="container" v-else>
            <img alt="empty cart" src="https://asandam.github.io/images/images_capstone/cart.png"/>
            <h1> YOUR BAG IS EMPTY. </h1>
            <p> Haven't added anything yet?<br> Add some fresh juices or smoothies to boost your day!  </p>
            <router-link to="/products" class="cta-btn">Shop Now</router-link>
        </div>
    </div>
</template>

<script>
export default{
    computed:{
        userCart(){
          return this.$store.state.userCart
      },
        totalCart(){
            return this.$store.state.totalCart
        },
    },
    methods: {
        getUserCart(){
            this.$store.dispatch('getCart', this.userID)
            
        },
    increaseQuantity(cart) {
      const newQuantity = cart.quantity + 1;
      this.$store.dispatch('updateQuantity', { prodID: cart.prodID, quantity: newQuantity });
      this.getUserCart();
    },
    decreaseQuantity(cart) {
      if (cart.quantity > 1) {
        const newQuantity = cart.quantity - 1;
        this.$store.dispatch('updateQuantity', { prodID: cart.prodID, quantity: newQuantity });
        this.getUserCart();
      }
    },
    },

    mounted() {
        this.getUserCart()
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.checkout {
    min-height: 100vh;
    width: 100%; 
    background-image: url('https://asandam.github.io/images/images_capstone/p9.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #4E5150;
    margin: 0 auto;
    padding: 10px 0 0;
    display: flex;
    flex-direction: column;
}

.header {
    height: 10%;
    margin-bottom: 10px;
}

.header h3 {
    font-size: 30px;
    color: #141515;
    font-weight: 500;
}

.main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: calc(100vh - 10% - 50px); 
}

.checkout-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .checkout-container {
        grid-template-columns: 2fr 1fr;
    }
}

.checkout-form, .checkout-details {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.checkout-form {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    padding: 20px;
}

#form h6 {
    font-size: 20px;
    font-weight: 500;
    background-color: #F2994A;
    padding: 5px;
    border-radius: 20px;
}

.checkout-form .form-control {
    margin: 10px 0;
    position: relative;
    text-align: left;
    border: none;
    background: transparent;
}

.checkout-form .form-control label:not([for="checkout-checkbox"]) {
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 2px;
    color: black;
}

.checkout-form .form-control input:not([type="checkbox"]) {
    width: 100%;
    padding: 10px 10px 10px 40px;
    border-radius: 10px;
    outline: none;
    border: 1.2px solid #26846485;
    font-size: 10px;
    font-weight: 700;
}

.checkout-form .form-control input:not([type="checkbox"])::placeholder {
    font-size: 11px;
    font-weight: 500;
}

.checkout-form .form-control label[for="checkout-checkbox"] {
    font-size: 12px;
    font-weight: 500;
    line-height: 10px;
}

.checkout-form .form-group {
    display: flex;
    column-gap: 25px;
}

.checkout-form .checkbox-control {
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.checkout-form .form-control-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.checkout-form .form-control-btn button {
    padding: 10px 25px;
    font-size: 13px;
    border: 0;
    border-radius: 7px;
    letter-spacing: 0.5px;
    font-weight: 200;
    cursor: pointer;
    margin-bottom: 20px;
}

.checkout-details .checkout-details-inner {
    background: transparent;
    border: 1px solid #145103;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
}

.checkout-details .checkout-lists {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 15px;
    margin-bottom: 40px;
}

.checkout-details .checkout-lists .card {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
}

.checkout-details .checkout-lists .card .card-image {
    width: 45%;
}

.checkout-details .checkout-lists .card .card-image img {
    width: 100%;
    object-fit: fill;
    border-radius: 20px;
    padding: 10px;
}

.checkout-details .checkout-lists .card .card-details {
    display: flex;
    flex-direction: column;
    margin: 5px 20px 10px;
    justify-content: center;
    align-items: center;
}

.card-name {
    font-size: 20px;
    font-weight: 500;
}

.card-price {
    font-size: 14px;
    font-weight: 500;
    color: #F2994A;
    margin-top: 5px;
    text-align: center;
}

.card-wheel {
    margin-top: 17px;
    border: 0.2px solid #4e515085;
    width: 90px;
    padding: 8px;
    border-radius: 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}

.checkout-details .checkout-lists .card .card-details .card-wheel button {
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

.checkout-details .checkout-shipping,
.checkout-details .checkout-total {
    display: flex;
    font-size: 16px;
    padding: 5px 0;
    border-top: 1px solid #036528;
    justify-content: space-between;
}

.checkout-details .checkout-shipping p,
.checkout-details .checkout-total p {
    font-size: 20px;
    color: rgb(9, 9, 9);
    margin: 10px;
}

.checkout-details .checkout-shipping h6,
.checkout-details .checkout-total h6 {
    font-size: 20px;
    color: rgb(9, 9, 9);
    margin: 10px;
}

@media screen and (max-width: 1024px) {
    .checkout {
        width: 80%;
    }

    .main {
        column-gap: 70px;
    }
}

@media screen and (max-width: 768px) {
    .checkout {
        width: 92%;
    }

    .main {
        flex-direction: column-reverse;
        height: auto;
        margin-bottom: 50px;
    }

    .checkout-form {
        width: 100%;
        margin-top: 35px;
    }

    .checkout-details {
        width: 100%;
    }
}

.container {
    text-align: center;
}

.container img {
    width: 100px;
    height: auto;
}

.container h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 5px 0 10px;
}

.container p {
    font-size: 16px;
    margin: 5px 0;
}

.cta-btn {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 28px;
  border-radius: 25px;
  transition: 0.5s;
  margin-top: 5px;
  border: 1px solid #000;
  color: #000;
  background: #09650f;
}

.cta-btn:hover {
  border: 2px solid #09650f;
  color: #fff;
}

.container img {
    width: 250px; 
    height: auto; 
}

.container img:hover{
    transform: scale(1.8); 

}
</style>