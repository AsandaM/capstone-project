<template>
  <section>
    <nav class="navbar navbar-expand-lg">
      <ul class="nav">
        <li :class="{ active: $route.path === '/' }" class="nav-item">
          <router-link to="/" class="nav-link text-success">HOME</router-link>
        </li>
        <li :class="{ active: $route.path === '/about' }" class="nav-item">
          <router-link to="/about" class="nav-link text-success">ABOUT</router-link>
        </li>
        <li :class="{ active: $route.path === '/products' }" class="nav-item">
          <router-link to="/products" class="nav-link text-success">products</router-link>
        </li>
        <li :class="{ active: $route.path === '/checkout' }" class="nav-item">
          <router-link to="/checkout" class="nav-link text-success">checkout</router-link>
        </li>
        <li :class="{ active: $route.path === '/signup' }" class="nav-item">
          <a href="#" class="nav-link text-success nav-icon-link" @click="showModal">log-in / sign-up</a>
        </li>
        <li :class="{ active: $route.path === '/admin' }" class="nav-item">
          <router-link to="/admin" class="nav-link text-success">Admin</router-link>
        </li>
        
      </ul>
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
  max-width: 900px;
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