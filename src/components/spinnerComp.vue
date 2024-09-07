<template>
    <!-- SPINNING SQUARES -->
     <main>
         <div class="spinner-box">
         <div class="configure-border-1">  
             <div class="configure-core"></div>
         </div>  
         <div class="configure-border-2">
             <div class="configure-core"></div>
         </div> 
         </div>
     </main>
</template>
<style scoped>
/* KEYFRAMES */
@keyframes configure-clockwise {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes configure-xclockwise {
  0% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-135deg);
  }
  75% {
    transform: rotate(-225deg);
  }
  100% {
    transform: rotate(-315deg);
  }
}

/* GRID STYLING */

* {
  box-sizing: border-box;
}

main {
  min-height: 100vh;
  background-image: url('https://asandam.github.io/images/images_capstone/p9.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-wrap: wrap;
}

.spinner-box {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

/* X-ROTATING BOXES */

.configure-border-1 {
  width: 115px;
  height: 115px;
  padding: 3px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #094d0e;
  animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
}

.configure-border-2 {
  width: 115px;
  height: 115px;
  padding: 3px;
  left: -115px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #f8f7f4;
  transform: rotate(45deg);
  animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
}

.configure-core {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

</style>