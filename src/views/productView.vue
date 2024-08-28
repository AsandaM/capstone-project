<template>
    <div class="products" id="products">
        <!-- Your existing code here -->


        <!-- Include the productCom component -->
        <productComp></productComp>
    </div>
</template>

<script>
import productComp from '@/components/productComp.vue'; // Import the productCom component

export default {
    name: 'productView',
    components: {
        productComp // Register the productCom component
    },
    // Your existing script code here

}
</script>

<style scoped>
/* Your existing style code here */


</style>