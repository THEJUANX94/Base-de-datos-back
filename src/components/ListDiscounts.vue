<template>
    <ul class="list-group">
        <li class="list-group-item list-group-item-action p-4" style="cursor: pointer"
            v-for="(descuentoProducto, index) in descuentosProducto" :key="index"
            @click="$router.push(`/${descuentoProducto.id_producto}/${descuentoProducto.id_descuento}`)">
            <div class="elements">
                <span>
                    id producto: {{ descuentoProducto.id_producto }}
                </span>
                <span>
                    id descuento: {{ descuentoProducto.id_descuento }}
                </span>
                <span>
                    fecha inicio: {{ descuentoProducto.fecha_inicio_descuento }}
                </span>
                <span>
                    fecha fin: {{ descuentoProducto.fecha_fin_descuento }}
                </span>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { DescuentosProducto } from "@/interfaces/DescuentosProducto";
import { getDiscountsProduct } from "@/services/DiscountProductService";
// import { getProducts } from "@/services/ProductService";
// import { getDiscounts } from "@/services/DiscountService";
import { defineComponent } from "vue";

export default defineComponent({
    name: "ListDiscount",
    data() {
        return {
            descuentosProducto: [] as DescuentosProducto[]
        }
    },
    methods: {
        async loadDiscounts() {
            const res = await getDiscountsProduct();
            this.descuentosProducto = res.data;
        }
    },
    mounted() {
        this.loadDiscounts();
    }
});
</script>

<style>
.elements {
    display: flex;
    justify-content: space-around;
}
</style>