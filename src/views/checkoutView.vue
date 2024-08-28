<template>
    <div class="checkout" id="checkout">
        <checkoutComp></checkoutComp>
    </div>
</template>

<script>
import checkoutComp from '@/components/checkoutComp.vue'; 

export default {
    name: 'checkoutView',
    components: {
        checkoutComp 
    },

}
</script>
