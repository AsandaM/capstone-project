<template>
  <section>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: $route.path === '/' }">
              <router-link to="/" class="nav-link text-success">HOME</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/about' }">
              <router-link to="/about" class="nav-link text-success">ABOUT</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/products' }">
              <router-link to="/products" class="nav-link text-success">PRODUCTS</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/checkout' }">
              <router-link to="/checkout" class="nav-link text-success">CHECKOUT</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/signup' }">
              <a v-if="!user.isLoggedIn" href="#" class="nav-link text-success nav-icon-link" @click="showModal">
                <i class="fas fa-user"></i>
              </a>
              <div v-else class="nav-link text-success nav-icon-link user-profile" @click="toggleUserMenu">
                <img :src="user.profilePicture" alt="User Profile" class="user-image">
                <span>Welcome, {{ user.name }}</span>
                <div v-if="isUserMenuVisible" class="user-menu">
                  <a href="#" @click="editProfile">Edit Profile</a>
                  <a href="#" @click="logout">Logout</a>
                </div>
              </div>
            </li>
            <li class="nav-item" :class="{ active: $route.path === '/admin' }">
              <router-link to="/admin" class="nav-link text-success">ADMIN</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <signup-comp v-if="isModalVisible" @close="closeModal" />
  </section>
</template>

<script>
import signupComp from './signupComp.vue';

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
      this.user.isLoggedIn = false;
      this.isUserMenuVisible = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');

section {
  height: 100%;
}
.navbar-collapse {
  justify-content: center;
}

nav {
  margin: 0 auto;
  padding: 0px 0;
  background-color: transparent;
  border-radius: 50px;
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

.nav-link.active {
  background-color: seagreen;
}

.user-profile {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.user-menu a {
  display: block;
  padding: 5px 10px;
  color: #333;
  text-decoration: none;
}

.user-menu a:hover {
  background-color: #f0f0f0;
}
</style>