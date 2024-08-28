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
                At NutrifyNow, we believe that genuine wellness begins with what you consume. That’s why we create our juices using only the freshest, top-quality fruits and vegetables, without any added sugars or preservatives. Our juices are crafted to nourish your body and enhance your overall health.
              </p>
              <button class="btn btn-success text-white h4 font-weight-medium px-3 py-2 rounded shadow">
                Shop Now
              </button>
            </div>
          </header>
        </div>
      </div>
      <div class="col-12 col-sm-4 p-0" id="img">
        <div class="slideshow-container">
          <div class="slides">
            <div class="image-container">
              <img src="https://asandam.github.io/images/images_capstone/home.avif" alt="home" class="w-100 h-100 object-cover">
            </div>
            <div class="image-container">
              <img src="https://asandam.github.io/images/images_capstone/image26.jpg" alt="Image 1" class="w-100 h-100 object-cover">
            </div>
            <div class="image-container">
              <img src="https://asandam.github.io/images/images_capstone/image32.jpg" alt="Image 2" class="w-100 h-100 object-cover">
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
    background-image: url('https://asandam.github.io/images/images_capstone/image9.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  .h2 {
    position: relative;
    z-index: 1; /* Ensures the text stays above the blurred background */
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
    background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white background */
    backdrop-filter: blur(5px); /* Blur effect */
    z-index: -1; /* Places the blurred background behind the text */
    border-radius: 10px; /* Optional: matches container's rounded corners */
  }
  
  img {
    border: 50px solid rgba(255, 255, 255, 0.1);
  }
.slideshow-container {
  position: relative;
  overflow: hidden; /* Ensure that the sliding images stay within the container */
  width: 100%; /* Set a width that suits your layout */
  height: 100%; /* Adjust height as needed */
}

.slides {
  position: relative;
  display: flex;
}

.image-container {
  min-width: 100%; /* Ensure each image takes up the full container width */
  position: relative; /* Important for the 'right' animation to work */
  transition: transform 0.5s ease-in-out;
  animation: imageSlide 18s ease-in-out infinite; /* Updated animation duration */
}

@keyframes imageSlide {
  0%, 20% {
    transform: translateX(0);
  }
  33.33%, 53.33% {
    transform: translateX(-100%);
  }
  66.66%, 86.66% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(-300%);
  }
}

  </style>