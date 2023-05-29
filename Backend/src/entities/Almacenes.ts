import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Lugares } from "./Lugares";

@Entity('almacenes')
export class Almacenes extends BaseEntity{

    @PrimaryColumn("int")
    id_almacen: number
    
    @ManyToOne(() => Lugares, (Lugares) => Lugares.id_lugar)
    id_lugar: number

    @Column("varchar", { length: 200 })
    nombre_almacen: string

    @Column("varchar", { length: 200 })
    direccion: string
}