"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Producto_controller_1 = require("../Controllers/Producto.controller");
const router = (0, express_1.Router)();
router.get("/productos", Producto_controller_1.getProductos);
router.get("/productos/:id_producto", Producto_controller_1.getProducto);
exports.default = router;
