import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Productos } from "./Productos";
import { Almacenes } from "./Almacenes";

@Entity('productos_almacen')
export class Productos_almacen extends BaseEntity{
    
    @ManyToOne(() => Productos, (producto) => producto.id_producto)
    @PrimaryColumn()
    id_producto: number

    @ManyToOne(() => Almacenes, (almacen) => almacen.id_almacen)
    @PrimaryColumn()
    id_almacen: number

    @Column("int")
    cantidad_producto_almacen: number
}