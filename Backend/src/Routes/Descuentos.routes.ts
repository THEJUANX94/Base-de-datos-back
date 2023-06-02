import { Router } from 'express'
import { getDescuentos, getDescuento } from '../Controllers/Descuentos.controller';

const router = Router()

router.get("/descuentos", getDescuentos)
router.get("/descuentos/:id_descuentos", getDescuento)
export default router