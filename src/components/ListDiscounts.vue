<template>
    <ul class="list-group">
        <li class="list-group-item list-group-item-action p-4" style="cursor: pointer"
            v-for="(descuentoProducto, index) in descuentosProducto" :key="index"
            @click="$router.push(`/${descuentoProducto.id_producto}/${descuentoProducto.id_descuento}`)">
            <div class="elements">
                <span>
                    {{ showProduct(descuentoProducto.id_producto) }}
                </span>
                <span>
                    {{ showDiscount(descuentoProducto.id_descuento) }}
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
import { getProducts } from "@/services/ProductService";
import { getDiscounts } from "@/services/DiscountService";
import { defineComponent } from "vue";
import { Productos } from "@/interfaces/Productos";
import { Descuentos } from "@/interfaces/Descuentos";

export default defineComponent({
    name: "ListDiscount",
    data() {
        return {
            descuentosProducto: [] as DescuentosProducto[],
            productos: [] as Productos[],
            descuentos: [] as Descuentos[]
        }
    },
    methods: {
        async loadDiscounts() {
            const res = await getDiscountsProduct();
            this.descuentosProducto = res.data;
            const res2 = await getProducts();
            this.productos = res2.data;
            const res3 = await getDiscounts();
            this.descuentos = res3.data;
        },
        showProduct(id: number) {
            let aux = "";
            this.productos.forEach(producto => {
                if(producto.id_producto == id) {
                    aux = producto.nombre_producto;
                }
            }); 
            return aux;
        },
        showDiscount(id: number) {
            let aux = "";
            this.descuentos.forEach(descuento => {
                if(descuento.id_descuentos == id) {
                    aux = (descuento.descuento * 100) + "% - " + descuento.descripcion;
                }
            }); 
            return aux;
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