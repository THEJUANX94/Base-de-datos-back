"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Tipo_producto_1 = require("./entities/Tipo_producto");
const Almacenes_1 = require("./entities/Almacenes");
const Descuentos_producto_1 = require("./entities/Descuentos_producto");
const Descuentos_1 = require("./entities/Descuentos");
const Facturas_compra_productos_1 = require("./entities/Facturas_compra_productos");
const Facturas_ventas_productos_1 = require("./entities/Facturas_ventas_productos");
const Facturas_1 = require("./entities/Facturas");
const Lugares_1 = require("./entities/Lugares");
const Marcas_1 = require("./entities/Marcas");
const Precios_1 = require("./entities/Precios");
const Productos_almacen_1 = require("./entities/Productos_almacen");
const Productos_marca_1 = require("./entities/Productos_marca");
const Productos_1 = require("./entities/Productos");
const Proveedores_1 = require("./entities/Proveedores");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: 'bqtso3eipo6oar87oqsx-mysql.services.clever-cloud.com',
    username: 'uo751dwxce81kor3',
    password: 'hFjrBFil3GoeTTYWQGKa',
    port: 3306,
    database: 'bqtso3eipo6oar87oqsx',
    entities: [Tipo_producto_1.Tipo_producto, Almacenes_1.Almacenes, Descuentos_producto_1.Descuentos_producto, Descuentos_1.Descuentos, Facturas_compra_productos_1.Facturas_compras_productos, Facturas_ventas_productos_1.Facturas_ventas_productos, Facturas_1.Facturas, Lugares_1.Lugares, Marcas_1.Marcas, Precios_1.Precios, Productos_almacen_1.Productos_almacen, Productos_marca_1.Productos_marca, Productos_1.Productos, Proveedores_1.Proveedores],
    logging: true,
    synchronize: true
});
