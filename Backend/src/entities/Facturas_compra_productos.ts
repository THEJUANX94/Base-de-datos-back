import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Productos } from "./Productos";
import { Facturas } from "./Facturas";

@Entity('facturas_compras_productos')
export class Facturas_compras_productos extends BaseEntity{

    @ManyToOne(() => Productos, (productos) => productos.id_producto)
    @PrimaryColumn()
    id_producto: number
    
    @ManyToOne(() => Facturas, (facturas) => facturas.id_facturas)
    id_factura: number

    @Column("int")
    cantidad_factura_producto: number

}