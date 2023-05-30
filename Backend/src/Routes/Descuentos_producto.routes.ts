import { Router } from 'express'
import { UpdateDescuentos_producto, createDescuento_producto, deleteDescuentos_producto, getDescuentos_producto, getDescuento_producto } from '../Controllers/Descuentos_producto.controller';

const router = Router()

router.post("/descuento_producto", createDescuento_producto)
router.get("/descuento_producto", getDescuentos_producto)
router.put("/descuento_producto/", UpdateDescuentos_producto)
router.delete("/descuento_producto/", deleteDescuentos_producto)
router.get("/descuento_producto/:id_producto/:id_descuento", getDescuento_producto)

export default router