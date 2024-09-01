<template>
    <div>
      <h1>Wish list</h1>
      <offcanvaComp ref="offcanvas">
        <template #offcanva-content>
          <p>Wish list content</p>
        </template>
      </offcanvaComp>
    </div>
  </template>
  
  <script>
  import offcanvaComp from './offcanvaComp.vue';
  
  export default {
    components: {
      offcanvaComp
    },
  };
  </script>