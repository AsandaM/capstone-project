<template>
    <div class="checkout" id="checkout">
        <!-- Your existing code here -->


        <!-- Include the productCom component -->
        <checkoutComp></checkoutComp>
    </div>
</template>

<script>
import checkoutComp from '@/components/checkoutComp.vue'; // Import the productCom component

export default {
    name: 'checkoutView',
    components: {
        checkoutComp // Register the productCom component
    },
    // Your existing script code here

}
</script>

<style scoped>
/* Your existing style code here */


</style>