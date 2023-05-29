import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Facturas } from "./Facturas";
import { Productos_almacen } from "./Productos_almacen";

@Entity('facturas_ventas_productos')
export class Facturas_ventas_productos extends BaseEntity{
    
    @ManyToOne(() => Facturas, (facturas) => facturas.id_facturas)
    @PrimaryColumn()
    id_factura: number

    @ManyToOne(() => Productos_almacen, (productos) => productos.id_producto)
    @PrimaryColumn()
    id_producto: number

    @ManyToOne(() => Productos_almacen, (almacenes) => almacenes.id_almacen)
    @PrimaryColumn()
    id_almacen: number

}