import { Router } from 'express'
import { UpdateTipo_producto, createTipoProducto, deleteTipo_Producto, getTipo_producto, getTipo_productos } from '../Controllers/Tipo_productos.controller';

const router = Router()

router.post("/tipo_producto", createTipoProducto)
router.get("/tipo_producto", getTipo_productos)
router.put("/tipo_producto/:id_tipo", UpdateTipo_producto)
router.delete("/tipo_producto/:id_tipo", deleteTipo_Producto)
router.get("/tipo:producto/:id_tipo", getTipo_producto)

export default router