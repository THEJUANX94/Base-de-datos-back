import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Proveedores } from "./Proveedores";
import { Facturas_compras_productos } from "./Facturas_compra_productos";
import { Facturas_ventas_productos } from "./Facturas_ventas_productos";

@Entity('facturas')
export class Facturas extends BaseEntity{

    @PrimaryColumn("int")
    id_facturas: number
    
    @ManyToOne(() => Proveedores, (id_proveedor) => id_proveedor.id_proveedor, {nullable: true})
    id_proveedor: number

    @Column("date")
    fecha_factura: string

    @Column("float")
    valor_factura: number

    @Column("char", {length: 1})
    tipo_factura: string

    @OneToMany(() => Facturas_compras_productos, (facturas_compras_productos) => facturas_compras_productos.id_factura)
    @JoinColumn()
    Facturas_compras_productos: Facturas[]

    @OneToMany(() => Facturas_ventas_productos, (facturas_ventas_productos) => facturas_ventas_productos.id_factura)
    @JoinColumn()
    Facturas_ventas_productos: Facturas[]

}