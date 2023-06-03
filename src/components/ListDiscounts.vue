<template>
    <div>
        <h1>discount</h1>
    </div>
</template>

<script lang="ts">
import { getDiscounts } from "@/services/DiscountService";
import { defineComponent } from "vue";

export default defineComponent({
    name: "ListDiscount",
    methods: {
        async loadDiscounts() {
            const res = await getDiscounts();
            console.log(res);
        }
    },
    mounted() {
        this.loadDiscounts();
    }
});
</script>

<style></style>