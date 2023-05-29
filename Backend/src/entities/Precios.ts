import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Productos } from "./Productos";

@Entity('precios')
export class Precios extends BaseEntity{

    @PrimaryColumn("int")
    id_precio: number
    
    @ManyToOne(() => Productos, (producto) => producto.id_producto, {nullable: true})
    id_producto: number

    @Column("date")
    fecha_inicio_precio: string

    @Column("date")
    fecha_fin_precio: string

    @Column("float")
    precio: number

    @Column("float")
    impuesto_precio: number
}