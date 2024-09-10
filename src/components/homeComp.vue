<template>
  <div class="d-flex flex-wrap" id="home">
    <div class="col-12 col-sm-8 mb-4">
      <div class="container h-100 p-sm-4">
        <nav class="d-flex justify-content-between align-items-center px-3">
          <div class="h2 font-weight-bold">
            NUTRIFYNOW<span class="text-success">.</span>
          </div>
        </nav>
        <header class="container d-flex flex-column flex-lg-row align-items-center h-99">
          <div class="w-100">
            <h1 class="display-4 display-lg-2 font-weight-bold">
              Your source for <span class="text-success">Healthy</span> sips.
            </h1>
            <div class="w-25 h-2 bg-success my-3"></div>
            <p class="h5 mb-4">
              At NutrifyNow, we believe that genuine wellness begins with what you consume. That’s why we create our
              juices using only the freshest, top-quality fruits and vegetables, without any added sugars or
              preservatives. Our juices are crafted to nourish your body and enhance your overall health.
            </p>
            <router-link to="/products">
              <button class="btn btn-success text-white h4 font-weight-medium px-3 py-2 rounded shadow">
                Shop Now
              </button>
            </router-link>
          </div>
        </header>
      </div>
    </div>
    <div class="col-12 col-sm-4 p-0" id="img">
      <div class="slideshow-container">
        <div class="slides">
          <div class="image-container">
            <img src="https://asandam.github.io/images/images_capstone/home1.png" alt="home1"
              class="w-90 h-90 object-cover">
          </div>
          <div class="image-container">
            <img src="https://asandam.github.io/images/images_capstone/h8.png" alt="home2"
              class="w-90 h-90 object-cover">
          </div>
          <div class="image-container">
            <img src="https://asandam.github.io/images/images_capstone/h7.png" alt="home3"
              class="w-90 h-90 object-cover">
          </div>
          <div class="image-container">
            <img src="https://asandam.github.io/images/images_capstone/h10.png" alt="home4"
              class="w-90 h-90 object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');

#home {
  font-family: "Muli";
  background-image: url('https://asandam.github.io/images/images_capstone/p9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

nav {
  padding: 40px;
}


.h2 {
  position: relative;
  z-index: 1;
}

.w-100 {
  position: relative;
  z-index: 1;
}

.w-100::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  z-index: -1;
  border-radius: 10px;
}

.h2::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
}

.slideshow-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.slides {
  position: relative;
  display: flex;
}

.image-container {
  min-width: 100%;
  position: relative;
  transition: transform 0.5s ease-in-out;
  animation: imageSlide 18s ease-in-out infinite;
}

.btn:hover{
  background-color: #df8910;
}

@keyframes imageSlide {

  0%,
  20% {
    transform: translateX(0);
  }

  33.33%,
  53.33% {
    transform: translateX(-100%);
  }

  66.66%,
  86.66% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(-300%);
  }
}

@media screen and (max-width: 768px) {
  .h5 {
    font-size: 16px;
  }

  .w-90 {
    height: 65%;
    margin-top: 40px;
  }

  .h-100 {
    padding: 0 !important;
  }
}
</style>