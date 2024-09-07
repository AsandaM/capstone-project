<template>
  <navbarComp/>
  <!-- <spinnerComp v-if="loading"></spinnerComp> -->
  <router-view/>
  <!-- <template>
  </template> -->
  <footerComp/>
</template>

<script>
import navbarComp from '@/components/navbarComp.vue'
import footerComp from '@/components/footerComp.vue'
// import spinnerComp from './components/spinnerComp.vue';
export default {
  components: {
    navbarComp,
    footerComp
    // spinnerComp
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,400;0,900;1,500&display=swap');
#app {
  font-family: "Muli";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
  padding: 0;
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background-color: #df8910;
}
</style>
