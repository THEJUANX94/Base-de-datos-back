<template>
    <div>
        <h1>discount</h1>
    </div>
</template>

<script lang="ts">
import { getDiscountsProduct } from "@/services/DiscountProductService";
// import { getProducts } from "@/services/ProductService";
// import { getDiscounts } from "@/services/DiscountService";
import { defineComponent } from "vue";

export default defineComponent({
    name: "ListDiscount",
    methods: {
        async loadDiscounts() {
            const res = await getDiscountsProduct();
            console.log(res);
            // const res2 = await getProducts();
            // console.log(res2);
            // const res3 = await getDiscounts();
            // console.log(res3);
        }
    },
    mounted() {
        this.loadDiscounts();
    }
});
</script>

<style></style>