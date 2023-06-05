<template>
  <div class="main-container">
    <h1>Modificar descuento</h1>
    <form @submit.prevent="updateD()">
      <label for="producto">Producto:</label>
      <select
        id="producto"
        name="producto"
        disabled
        v-model="currentDiscount.id_producto"
      >
        <option
          v-for="producto in productos"
          :key="producto.id_producto"
          :value="producto.id_producto"
        >
          {{ producto.nombre_producto }}
        </option>
      </select>

      <br /><br />

      <label for="descuento">Descuento:</label>
      <select
        id="descuento"
        name="descuento"
        disabled
        v-model="currentDiscount.id_descuento"
      >
        <option
          v-for="descuento in descuentos"
          :key="descuento.id_descuentos"
          :value="descuento.id_descuentos"
        >
          {{ descuento.descuento * 100 + "% - " + descuento.descripcion }}
        </option>
      </select>

      <br /><br />

      <label for="fechaInicial">Fecha inicial:</label>
      <input
        type="date"
        id="fechaInicial"
        name="fechaInicial"
        v-model="currentDiscount.fecha_inicio_descuento"
      />

      <br /><br />

      <label for="fechaFinal">Fecha final:</label>
      <input
        type="date"
        id="fechaFinal"
        name="fechaFinal"
        v-model="currentDiscount.fecha_fin_descuento"
      />

      <br /><br />

      <div class="button-container">
        <input type="submit" value="Modificar" />
      </div>
    </form>
    <br /><br />
    <div class="button-container">
      <button @click="deleteD()">Eliminar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Descuentos } from "@/interfaces/Descuentos";
import { DescuentosProducto } from "@/interfaces/DescuentosProducto";
import { Productos } from "@/interfaces/Productos";
import {
  deleteDiscount,
  getDiscountProduct,
  updateDiscount,
} from "@/services/DiscountProductService";
import { getDiscounts } from "@/services/DiscountService";
import { getProducts } from "@/services/ProductService";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      currentDiscount: {} as DescuentosProducto,
      productos: [] as Productos[],
      descuentos: [] as Descuentos[],
    };
  },
  methods: {
    async loadDiscount(id_producto: number, id_descuento: number) {
      const res = await getDiscountProduct(id_producto, id_descuento);
      this.currentDiscount = res.data;
      const res2 = await getProducts();
      this.productos = res2.data;
      const res3 = await getDiscounts();
      this.descuentos = res3.data;
    },

    async updateD() {
      await updateDiscount(
        this.currentDiscount.id_producto,
        this.currentDiscount.id_descuento,
        this.currentDiscount
      );
      this.$router.push({ name: "discounts" });
    },

    async deleteD() {
      await deleteDiscount(
        this.currentDiscount.id_producto,
        this.currentDiscount.id_descuento
      );
      this.$router.push({ name: "discounts" });
    },
  },
  mounted() {
    if (
      typeof this.$route.params.id_producto === "string" &&
      typeof this.$route.params.id_descuento === "string"
    ) {
      this.loadDiscount(
        parseInt(this.$route.params.id_producto),
        parseInt(this.$route.params.id_descuento)
      );
    }
  },
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
}

form {
  max-width: 400px;
  margin: 20px auto;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

select,
input[type="date"],
input[type="submit"] {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 50%;
  background-color: #da0320;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"] {
  width: 50%;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

br {
  line-height: 0;
}

.button-container {
  display: flex;
  justify-content: center;
}

.main-container {
  border: solid 1px #ccc;
  width: 600px;
  margin: 10px auto;
  padding: 20px;
}
</style>