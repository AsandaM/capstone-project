<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a href="#" class="nav-link text-success nav-icon-link" @click="showModal">LOG-IN / SIGN-UP</a>
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
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');

section {
  height: 100%;
  /* border-bottom: 2px solid rgb(217, 247, 144); */
  /* background-color: aquamarine; */
}

nav {
  max-width: 800px;
  margin: 0 auto;
  padding: 0px 0;
  background-color: azure;
  border-radius: 50px;
}

nav ul {
  text-align: center;
}

nav ul li {
  display: inline-block;
}

.nav-link {
  padding: 18px;
  font-family: "Muli";
  text-transform: uppercase;
  color: rgb(74, 73, 73);
  font-size: 18px;
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
</style>