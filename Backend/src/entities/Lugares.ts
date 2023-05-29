import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Almacenes } from "./Almacenes";

@Entity('lugares')
export class Lugares extends BaseEntity{

    @PrimaryColumn("int")
    id_lugar: number

    @ManyToOne(() => Lugares, (Lugares) => Lugares.id_lugar)
    id_otro_lugar: number

    @OneToMany(() => Lugares, (id_lugar) => id_lugar.Lugares)
    @JoinColumn()
    Lugares: Lugares[]

    @OneToMany(() => Almacenes, (almacenes) => almacenes.id_lugar)
    @JoinColumn()
    Almacenes: Lugares[]

    @Column("varchar", { length: 200 })
    nombre_lugar: string

    @Column("char", { length: 1 })
    tipo_lugar: string


}