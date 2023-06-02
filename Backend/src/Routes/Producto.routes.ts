import { Router } from 'express'
import { getProductos, getProducto } from '../Controllers/Producto.controller';

const router = Router()

router.get("/productos", getProductos)
router.get("/productos/:id_producto", getProducto)

export default router