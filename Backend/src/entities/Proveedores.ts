import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Facturas } from "./Facturas";
import { Marcas } from "./Marcas";

@Entity('proveedores')
export class Proveedores extends BaseEntity{

    @PrimaryColumn("int")
    id_proveedor : number
    
    @Column("varchar", {length: 100, unique: true})
    nombre_proveedor: string

    @Column("varchar", { length: 20 })
    telefono_proveedor: string

    @Column("varchar", { length: 50 , nullable: true})
    correo_proveedor: string

    @OneToMany(() => Facturas, (facturas) => facturas.id_proveedor)
    @JoinColumn()
    Facturas: Proveedores[]

    @OneToMany(() => Marcas, (marcas) => marcas.id_proveedor)
    @JoinColumn()
    Marcas: Proveedores[]
}