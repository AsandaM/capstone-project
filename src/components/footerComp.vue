<template>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-widget d-flex justify-content-between align-items-center">
          <div class="footer-logo">
            <img src="https://asandam.github.io/images/images_capstone/logo.png" alt="Logo">
          </div>
          <div class="footer-social-icons">
            <a href="#"><i class="fab fa-facebook-f text-success"></i></a>
            <a href="#"><i class="fab fa-twitter text-success"></i></a>
            <a href="#"><i class="fab fa-instagram text-success"></i></a>
          </div>
          <div class="footer-newsletter">
            <p class="text-success">Subscribe to our newsletter</p>
            <form>
              <input type="email" placeholder="Email Address" id="input">
              <button><i class="fas fa-paper-plane text-success"></i></button>
            </form>
          </div>
        </div>
        <div class="footer-widget d-flex justify-content-center align-items-center">
          <div class="copyright-text">
            <p class="text-success">Copyright &copy; 2024, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        footerMenu: ['Home', 'Main', 'About', 'Service', 'Contact'],
      };
    },
  };
  </script>
  
  <style scoped>
  .footer-section {
    color: #170101;
    padding: 20px 0;
    position: relative;
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
    color: #ffffff;
    margin: 0 10px;
    font-size: 18px;
  }
  
  .footer-social-icons a:hover {
    color: #ff5e14;
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