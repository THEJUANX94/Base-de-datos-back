<template>
    <div class="main-container">
        <h1>Crear descuento</h1>
        <form @submit.prevent="save()">
            <label for="producto">Producto:</label>
            <select id="producto" name="producto" v-model="descuentosProducto.id_producto">
                <option value="1">producto 1</option>
                <option value="2">producto 2</option>
                <option value="3">producto 3</option>
            </select>

            <br><br>

            <label for="descuento">Descuento:</label>
            <select id="descuento" name="descuento" v-model="descuentosProducto.id_descuento">
                <option value="1">descuento 1</option>
                <option value="2">descuento 2</option>
                <option value="3">descuento 3</option>
            </select>

            <br><br>

            <label for="fechaInicial">Fecha inicial:</label>
            <input type="date" id="fechaInicial" name="fechaInicial" v-model="descuentosProducto.fecha_inicio_descuento">

            <br><br>

            <label for="fechaFinal">Fecha final:</label>
            <input type="date" id="fechaFinal" name="fechaFinal" v-model="descuentosProducto.fecha_fin_descuento">

            <br><br>

            <div class="button-container">
                <input type="submit" value="Crear">
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DescuentosProducto } from "../interfaces/DescuentosProducto";
import { createDiscount } from "../services/DiscountService";

export default defineComponent({
    name: "AddDiscount",
    data() {
        return {
            descuentosProducto: {} as DescuentosProducto
        }
    },
    methods: {
        async save() {
            console.log(this.descuentosProducto);
            await createDiscount(this.descuentosProducto);
        }
    }
});
</script>

<style>
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

input[type="submit"] {
    width: 50%;
    background-color: #4CAF50;
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