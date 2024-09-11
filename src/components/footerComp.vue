<template>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-widget d-flex justify-content-between align-items-center">
          <div class="footer-logo">
            <img src="https://asandam.github.io/images/images_capstone/logo.png" alt="Logo">
          </div>
          <div class="footer-social-icons">
            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f text-success"></i></a>
            <a href="https://web.whatsapp.com/" target="_blank"><i class="fab fa-whatsapp text-success"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram text-success"></i></a>
          </div>
          <div class="footer-newsletter">
            <p class="text-success">Subscribe to our newsletter</p>
            <form action="https://formcarry.com/s/SpSXqcRRU7e" method="POST" enctype="multipart/form-data">
              <input type="email" placeholder="Email Address" id="input">
              <button type="submit"><i class="fas fa-paper-plane text-success"></i></button>
            </form>
          </div>
        </div>
        <div class="footer-widget d-flex justify-content-center align-items-center">
          <div class="copyright-text">
            <p class="text-success">Copyright &copy; {{year}}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      };
    },
  };
  </script>
  
  <style scoped>
  .footer-section {
    color: #170101;
    padding: 20px 0;
    position: relative;
    background-color: #fff;
    border-top: green 1px solid ;
  }
  
  .footer-logo img {
    max-width: 90px;
    margin-bottom: 20px;
  }
  
  .footer-widget {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-social-icons {
    margin-bottom: 20px;
  }
  
  .footer-social-icons a {
    margin: 0 10px;
    font-size: 19px;
  }
  
  .footer-social-icons  a:hover {
    background-color: #ff5e14;
  }
  
  .footer-newsletter p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .footer-newsletter form {
    display: flex;
  }
  
  .footer-newsletter input {
    padding: 5px; /* Adjusted padding to make the input smaller */
    border: none;
    flex: 1;
  }
  
  .footer-newsletter button {
    padding: 5px 10px; /* Adjusted padding to match the input size */
    background-color: #ff5e14;
    border: none;
    color: #ffffff;
  }
  
.footer-newsletter button:hover {
    background-color: darkgreen;
}
  
.copyright-text {
    margin-right: 15%;
}

#input{
    border: 1px solid #ff5e14;
}
  </style>