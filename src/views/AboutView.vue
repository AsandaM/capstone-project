<template>
  <main>
    <section id="about">
      <div class="container">
        <header class="section-header text-center mb-5 pb-2">
          <h1 class="display-4 display-lg-2 font-weight-bold text-success">About Us</h1>
          <div class="w-25 h-2 bg-success my-3"></div>
          <p>
            Welcome to NutrifyNow, where health meets convenience. We are passionate about empowering individuals to achieve their health and wellness goals through the power of natural, nutrient-rich juices and smoothies.
          </p>
        </header>
  
        <div class="row about-cols">
          <div class="col-md-4 wow fadeInUp">
            <div class="about-col bg-success">
              <div class="img">
                <img src="" alt="" class="img-fluid" />
                <div class="icon">
                  <i class="ion-ios-speedometer-outline"></i>
                </div>
              </div>
              <h2 class="title">Our Mission</h2>
              <p class="text-center">
                To provide high-quality, natural products that help you heal, improve performance, lose weight, and gain strength. We believe in the transformative power of clean, healthy living, and we're here to support your journey every step of the way.
              </p>
            </div>
          </div>
  
          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="about-col">
              <div class="img">
                <img src="https://asandam.github.io/images/M.png" alt="" class="img-fluid" />
                <div class="icon">
                  <i class="ion-ios-list-outline"></i>
                </div>
              </div>
              <h2 class="title">Our Products</h2>
              <p class="text-center">
                We offer natural juices, smoothies, soups, and shakes made from fresh ingredients. Each product is crafted to boost your health and well-being. Enjoy delicious, nutrient-packed options that support your goals.
              </p>
            </div>
          </div>
  
          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div class="about-col bg-success">
              <div class="img">
                <img src="https://asandam.github.io/images/M.png" alt="" class="img-fluid" />
                <div class="icon">
                  <i class="ion-ios-eye-outline"></i>
                </div>
              </div>
              <h2 class="title">Why Choose Us?</h2>
              <p class="text-center">
                We pride ourselves on delivering more than just products—we offer a commitment to your health and well-being. Our team is passionate about helping you reach your goals through personalized service and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Call To Action Section -->
    <section id="call-to-action" class="wow fadeIn">
      <div class="container text-center">
        <h3 class="text-success">Looking to Improve Your Health and Wellness?</h3>
        <p class="text-center">
          Discover our range of nutritious juices and smoothies designed to enhance your well-being, <br> boost your energy, and support your fitness goals.
        </p>
        <router-link to="/products" class="cta-btn">Shop Now</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>

main{
  background: linear-gradient(rgba(21, 86, 112, 0.1), rgba(0, 0, 0, 0.1)), url('https://asandam.github.io/images/images_capstone/p9.jpg') fixed center center;
  background-size: cover;
}
#about {
  padding: 60px 0 40px 0;
  position: relative;
}

#about::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;
  z-index: 9;
}

#about .container {
  position: relative;
  z-index: 10;
}

header p{
  font-size: 19px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  color: black;
  font-weight: 500;
}

#about .about-col {
  background: #f5b506;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  height: 100%;
}

#about .about-col .img {
  position: relative;
}

#about .about-col .icon {
  width: 64px;
  height: 64px;
  padding-top: 8px;
  text-align: center;
  position: absolute;
  background-color: #e16c45;
  border-radius: 50%;
  text-align: center;
  border: 4px solid #fff;
  left: calc(50% - 32px);
  bottom: -30px;
  transition: 0.3s;
}

#about .about-col i {
  font-size: 36px;
  line-height: 1;
  color: #fff;
  transition: 0.3s;
}

#about .about-col:hover .icon {
  background-color: #fff;
}

#about .about-col h2 {
  color: #000;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  padding: 0;
  margin: 40px 0 12px 0;
}

#about .about-col p {
  font-size: 16px;
  line-height: 24px;
  color: #333;
  margin-bottom: 0;
  padding: 0 20px 20px 20px;
}

#call-to-action {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 60px 0;
}

#call-to-action h3 {
  color: black;
  font-size: 28px;
  font-weight: 700;
}

#call-to-action p {
  color: black;
}

#call-to-action .cta-btn {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 28px;
  border-radius: 25px;
  transition: 0.5s;
  margin-top: 10px;
  /* margin-right: 50px; */
  border: 2px solid #000;
  color: #000;
}

#call-to-action .cta-btn:hover {
  background: #09650f;
  border: 2px solid #09650f;
  color: #fff;
}
</style>
