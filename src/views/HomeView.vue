<template>
  <div class="home">
    <home-comp></home-comp>
  </div>
</template>

<script>
// @ is an alias to /src
import homeComp from '@/components/homeComp.vue'

export default {
  name: 'HomeView',
  components: {
    homeComp
  }
}
</script>
