import express from 'express'
import cors from 'cors'
const app = express()
import Tipo_productos_routes from "./Routes/Tipo_productos.routes";
import Descuentos_producto_routes from "./Routes/Descuentos_producto.routes"

app.use(cors())
app.use(express.json())
app.use(Tipo_productos_routes)
app.use(Descuentos_producto_routes)

export default app;