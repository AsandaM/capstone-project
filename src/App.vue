<template>
  <navbarComp/>
  <router-view/>
  <footerComp/>
</template>

<script>
import navbarComp from '@/components/navbarComp.vue'
import footerComp from '@/components/footerComp.vue'
export default {
  components: {
    navbarComp,
    footerComp
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
