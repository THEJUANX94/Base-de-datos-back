import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Descuentos_producto } from "./Descuentos_producto";

@Entity('descuentos')
export class Descuentos extends BaseEntity{

    @PrimaryColumn("int")
    id_descuentos : number

    @Column("float")
    descuento: number

    @Column("varchar", { length: 255 })
    descripcion: string

    @OneToMany(() => Descuentos_producto, (id_descuentos) => id_descuentos.id_descuento)
    @JoinColumn()
    Descuentos_lugares: Descuentos[]
}