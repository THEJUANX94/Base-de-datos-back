import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Productos } from "./Productos";

@Entity('tipos_producto')
export class Tipo_producto extends BaseEntity{

    @PrimaryColumn("int")
    id_tipo: number

    @Column("varchar", { length: 50 })
    nombre_tipo: string

    @OneToMany(() => Productos, (id_tipo) => id_tipo.id_tipo)
    @JoinColumn()
    Productos: Tipo_producto[]
}