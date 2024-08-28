<template>

    <div class="checkout">
        <header class="header">
            <h3>Checkout</h3>
        </header>    
        <main class="main">
            <section class="checkout-form">
                <form action="#!" method="get" id="form">
                    <h6>Contact information</h6>
                    <div class="form-control">
                        <label for="checkout-email">E-mail</label>
                        <div>
                            <span class="fa fa-envelope"></span>
                            <input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email...">
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="checkout-phone">Phone</label>
                        <div>
                            <span class="fa fa-phone"></span>
                            <input type="tel" name="checkout-phone" id="checkout-phone" placeholder="Enter you phone...">
                        </div>
                    </div>
                    <br>
                    <h6>Shipping address</h6>
                    <div class="form-control">
                        <label for="checkout-name">Full name</label>
                        <div>
                            <span class="fa fa-user-circle"></span>
                            <input type="text" id="checkout-name" name="checkout-name" placeholder="Enter you name...">
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="checkout-address">Address</label>
                        <div>
                            <span class="fa fa-home"></span>
                            <input type="text" name="checkout-address" id="checkout-address" placeholder="Your address...">
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="checkout-city">City</label>
                        <div>
                            <span class="fa fa-building"></span>
                            <input type="text" name="checkout-city" id="checkout-city" placeholder="Your city...">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-control">
                            <label for="checkout-country">Country</label>
                            <div>
                                <span class="fa fa-globe"></span>
                                <input type="text" name="checkout-country" id="checkout-country" placeholder="Your country..." list="country-list">
                                <datalist id="country-list">
                                    <option value="India"></option>
                                    <option value="USA"></option>
                                    <option value="Russia"></option>
                                    <option value="Japan"></option>
                                    <option value="Egypt"></option>
                                </datalist>
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="checkout-postal">Postal code</label>
                            <div>
                                <span class="fa fa-archive"></span>
                                <input type="numeric" name="checkout-postal" id="checkout-postal" placeholder="Your postal code...">
                </div>
                        </div>
                    </div>
                    <div class="form-control checkbox-control">
                        <input type="checkbox" name="checkout-checkbox" id="checkout-checkbox">
                        <label for="checkout-checkbox">Save this information for next time</label>
                    </div>
                    <div class="form-control-btn">
                        <button>Continue</button>
                    </div>
                </form>
            </section>
    
            <section class="checkout-details">
                <div class="checkout-details-inner">
                    <div class="checkout-lists">
                        <div class="card">
                            <div class="card-image"><img src="https://rvs-checkout-page.onrender.com/photo1.png" alt=""></div>
                            <div class="card-details">
                                <div class="card-name">Vintage Backbag</div>
                                <div class="card-price">R54.99</div>
                                <div class="card-wheel">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-image"><img src="https://rvs-checkout-page.onrender.com/photo2.png" alt=""></div>
                            <div class="card-details">
                                <div class="card-name">Levi Shoes</div>
                                <div class="card-price">R74.99</div>
                                <div class="card-wheel">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="checkout-shipping">
                        <h6>Shipping</h6>
                        <p>R19</p>
                    </div>
                    <div class="checkout-total">
                        <h6>Total</h6>
                        <p>R148.98</p>
                    </div>
                </div>
            </section>
    
        </main>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}


.checkout {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    width: 100%; 
    background-color: #d3f1a4;
    color: #4E5150;
    margin: 0 auto;
    padding: 50px 0 0;
}

.header {
    height: 5%;
    margin-bottom: 30px;
}

.header h3 {
    font-size: 30px;
    color: #141515;
    font-weight: 500;
}

.main {
    height: 85%;
    display: flex;
    column-gap: 100px;
    justify-content: center;
    align-items: center;
}

.checkout-form {
    width: 50%;
}

#form h6 {
    font-size: 20px;
    font-weight: 500;
}

.checkout-form .form-control {
    margin: 10px 0;
    position: relative;
    text-align: left;
    border: none;
    background: transparent;
}

.checkout-form .form-control label:not([for="checkout-checkbox"]) {
    /* display: block; */
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 2px;
}

.checkout-form .form-control input:not([type="checkbox"]) {
    width: 100%;
    padding: 10px 10px 10px 40px;
    border-radius: 10px;
    outline: none;
    border: 0.2px solid #26846485;
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
    font-size: 12px;
    color: #fff;
    background: #F2994A;
    border: 0;
    border-radius: 7px;
    letter-spacing: 0.5px;
    font-weight: 200;
    cursor: pointer;
    margin-bottom: 20px;
}


.checkout-details .checkout-details-inner {
    background: #dcf1d6;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    margin: 0 auto;
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
    margin: 5px 20px 10px ;
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
    border-top: 1px solid #BDBDBD;
    justify-content: space-between;
}

.checkout-details .checkout-shipping p,
.checkout-details .checkout-total p {
    font-size: 20px;
    font-weight: 500;
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

</style>