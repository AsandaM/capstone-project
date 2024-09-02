<!-- offcanvaComp.vue -->
<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasViewProfile" aria-labelledby="offcanvasViewProfileLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasViewProfileLabel"><slot name="title"></slot></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <slot name="body"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'offcanvaComp'
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>