<template>
   <section class="contact" id="contact">
        <div class="container">
            <header class="section-header text-center mb-5 pb-2">
                <h1 class="display-4 display-lg-2 font-weight-bold text-success">Contact Us</h1>
                <div class="w-25 h-2 bg-success my-3"></div>
                <p class="text-black fs-5">
                    We're here to help you on your journey to better health! 
                    Whether you have questions about our products, need recommendations for your specific health goals, 
                    or just want to say hello, we'd love to hear from you.
                </p>
            </header>
            <div class="row">
                <div class="col-md-5 text-start">
                    <div class="title">
                        <h2 class="text-black">Contact detail</h2>
                    </div>
                    <div class="content text-success">
                        <div class="info">
                            <i class="fas fa-mobile-alt text-success"></i>
                            <h4 class="d-inline-block">PHONE :
                                <br>
                                <span class="text-black">+12457836913</span></h4>
                        </div>
                        <div class="info">
                            <i class="far fa-envelope text-success"></i>
                            <h4 class="d-inline-block">EMAIL :
                                <br>
                                <span class="text-black">example@info.com</span></h4>
                        </div>
                        <div class="info">
                            <i class="fas fa-map-marker-alt text-success"></i>
                            <h4 class="d-inline-block">ADDRESS :<br>
                                <span class="text-black">6743 last street , Abcd, Xyz</span></h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Name">
                            </div>
                            <div class="col-sm-6">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="col-sm-12">
                                <input type="text" class="form-control" placeholder="Subject">
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                        <button class="btn btn-block bg-success" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background: linear-gradient(rgba(21, 86, 112, 0.1), rgba(0, 0, 0, 0.1)), url('https://asandam.github.io/images/images_capstone/p9.jpg') fixed center center;
    background-size: cover;
    height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    overflow: hidden; 
}

.contact {
    padding: 20px; 
    width: 100%; 
    box-sizing: border-box;
}

.contact .form-control {
    padding: 15px; 
    font-size: 13px;
    margin-bottom: 10px;
    background: #f9f9f9;
    border: 0;
    border-radius: 10px;
}

.contact button.btn {
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    background: #ff9100;
    color: #ffffff;
    margin-bottom: 10px;
}

.contact .content .info {
    margin-top: 20px; 
}

.contact .content .info i {
    font-size: 30px;
    padding: 0;
    margin: 0;
    margin-right: 20px;
    width: 20px;
}

.contact .content .info h4 {
    font-size: 14px;
    line-height: 1.4;
}

.contact .content .info h4 span {
    font-size: 14px;
    font-weight: 300;
}

.container{
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
}
</style>