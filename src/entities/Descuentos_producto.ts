import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Descuentos } from "./Descuentos";
import { Productos } from "./Productos";

@Entity('descuentos_producto')
export class Descuentos_producto extends BaseEntity{
    
    @ManyToOne(() => Productos, (id_producto) => id_producto.id_producto)
    @PrimaryColumn("int")
    id_producto: number

    @ManyToOne(() => Descuentos, (id_descuentos) => id_descuentos.id_descuentos)
    @PrimaryColumn("int")
    id_descuento: number

    @Column("date")
    fecha_inicio_descuento: string

    @Column("date")
    fecha_fin_descuento: string

}