import {DataSource} from 'typeorm'
import { Tipo_producto } from './entities/Tipo_producto'
import { Almacenes } from './entities/Almacenes'
import { Descuentos_producto } from './entities/Descuentos_producto'
import { Descuentos } from './entities/Descuentos'
import { Facturas_compras_productos } from './entities/Facturas_compra_productos'
import { Facturas_ventas_productos } from './entities/Facturas_ventas_productos'
import { Facturas } from './entities/Facturas'
import { Lugares } from './entities/Lugares'
import { Marcas } from './entities/Marcas'
import { Precios } from './entities/Precios'
import { Productos_almacen } from './entities/Productos_almacen'
import { Productos_marca } from './entities/Productos_marca'
import { Productos } from './entities/Productos'
import { Proveedores } from './entities/Proveedores'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: 'bqtso3eipo6oar87oqsx-mysql.services.clever-cloud.com',
    username: 'uo751dwxce81kor3',
    password: 'hFjrBFil3GoeTTYWQGKa',
    port: 3306,
    database: 'bqtso3eipo6oar87oqsx',
    entities: [Tipo_producto, Almacenes, Descuentos_producto, Descuentos, Facturas_compras_productos, Facturas_ventas_productos, Facturas, Lugares, Marcas, Precios, Productos_almacen, Productos_marca, Productos, Proveedores],
    logging: true,
    synchronize: true
})