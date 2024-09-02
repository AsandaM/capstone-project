<template>
  <section>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-center">
            <ul class="navbar-nav">
              <li class="nav-item" :class="{ active: $route.path === '/' }">
              <router-link to="/" class="nav-link text-success">HOME</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/about' }">
              <router-link to="/about" class="nav-link text-success">ABOUT</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/products' }">
              <router-link to="/products" class="nav-link text-success">SHOP</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/contact' }">
              <router-link to="/contact" class="nav-link text-success">contact</router-link>
            </li>
            </ul>
          </div>
          <div class="navbar-right">
            <ul class="navbar-nav">
              <div v-if="$cookies.get('token')" class="dropdown-center">
                <a href="#" class="nav-link text-success nav-icon-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" ><i class="fas fa-user me-2"></i></a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="#" class="dropdown-item" @click="logout">logout</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="dropdown-item">Edit profile</a>
                  </li>
                </ul>
              </div>
              <div v-else>
                <li class="nav-item" :class="{ active: $route.path === '/signup' }">
                  <a href="#" class="nav-link text-success nav-icon-link" @click="showModal">
                    <i class="fas fa-user me-2"></i>
                  </a>
                </li>
              </div>
              <li class="nav-item" :class="{ active: $route.path === '/checkout' }">
                <router-link to="/checkout" class="nav-link text-success"><i class="fas fa-cart-shopping me-2"></i></router-link>
              </li>
              <li class="nav-item" :class="{ active: $route.path === '/wishlist' }">
                <router-link to="/wishlist" class="nav-link text-success"><i class="fas fa-heart me-2"></i></router-link>
              </li>
              <li class="nav-item" :class="{ active: $route.path === '/admin' }">
                <div v-if="isAdmin">
                  <router-link to="/admin" class="nav-link text-success" :disabled="!isAdmin"><i class="fas fa-cogs me-3"></i></router-link>
                </div>
                <div v-else>
                  <li class="nav-item">
                    <a href="#" class="nav-link text-success nav-icon-link" @click="showAdminAlert"><i class="fas fa-cogs me-3"></i></a>
                  </li>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <signup-comp v-if="isModalVisible" @close="closeModal" />
  </section>
</template>

<script>
import signupComp from './signupComp.vue';
import Swal from 'sweetalert2'

export default {
  components: {
    signupComp
  },
  data() {
    return {
      isModalVisible: false,
      isUserMenuVisible: false,
      user: {
        isLoggedIn: false,
        name: '',
        profilePicture: ''
      },
      welcomeMessage: ''
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleUserMenu() {
      this.isUserMenuVisible = !this.isUserMenuVisible;
    },
    editProfile() {
      // Logic to edit profile
      this.isUserMenuVisible = false;
    },
    logout() {
      // Logic to logout
      this.$cookies.remove('token')
      this.$cookies.remove('userRole')
    },
    showAdminAlert() {
      Swal.fire({
        icon: 'warning',
        title: 'Access Denied',
        text: 'Only admins can access this page. Please log in as an admin.',
        confirmButtonText: 'OK',
        background: '#f8d7da', // Custom background color
        iconColor: '#721c24', // Custom icon color
        confirmButtonColor: '#d33', // Custom button color
        customClass: {
          popup: 'custom-swal-popup', // Custom class for the popup
          title: 'custom-swal-title', // Custom class for the title
          content: 'custom-swal-content', // Custom class for the content
          confirmButton: 'custom-swal-confirm-button' // Custom class for the confirm button
        }
      });
    }
  },
  computed:{
    isAdmin(){
      return this.$cookies.get('userRole') == 'admin'
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');

section {
  height: 100%;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;

}

.navbar-left {
  flex: 1;
}

.navbar-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

nav ul {
  text-align: center;
}

nav ul li {
  display: inline-block;
  font-weight: 100;
}

.nav-link {
  padding: 18px;
  font-family: "Muli";
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;
  display: block;
}

.nav-link:hover {
  text-decoration: underline;
  text-decoration-color: rgba(7, 84, 39, 0.5);
}
/* Custom SweetAlert2 styles */
.custom-swal-popup {
  border: 2px solid #721c24;
}

.custom-swal-title {
  color: #721c24;
}

.custom-swal-content {
  color: #721c24;
}

.custom-swal-confirm-button {
  background-color: #d33;
  color: #fff;
}
</style>