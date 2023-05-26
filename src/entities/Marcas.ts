import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Proveedores } from "./Proveedores";
import { Productos_marca } from "./Productos_marca";

@Entity('marcas')
export class Marcas extends BaseEntity{

    @PrimaryColumn("int")
    id_marca: number
    
    @ManyToOne(() => Proveedores, (proveedor) => proveedor.id_proveedor)
    id_proveedor: number

    @Column("varchar", { length: 50 })
    nombre_marca: string

    @OneToMany(() => Productos_marca, (productos_marca) => productos_marca.id_marca)
    @JoinColumn()
    Productos_marca: Marcas[]
}