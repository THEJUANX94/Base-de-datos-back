import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Tipo_producto } from "./Tipo_producto";
import { Descuentos_producto } from "./Descuentos_producto";
import { Facturas_compras_productos } from "./Facturas_compra_productos";
import { Precios } from "./Precios";
import { Productos_marca } from "./Productos_marca";

@Entity('productos')
export class Productos extends BaseEntity{

    @PrimaryColumn("int")
    id_producto : number
    
    @ManyToOne(() => Tipo_producto, (id_tipo) => id_tipo.id_tipo)
    id_tipo: number

    @Column("varchar", { length: 100 })
    nombre_producto: string

    @OneToMany(() => Descuentos_producto, (id_descuentos) => id_descuentos.id_descuento)
    @JoinColumn()
    Descuentos_lugares: Productos[]

    @OneToMany(() => Facturas_compras_productos, (facturas_compras_productos) => facturas_compras_productos.id_producto)
    @JoinColumn()
    Facturas_compras_productos: Productos[]

    @OneToMany(() => Precios, (precios) => precios.id_producto)
    @JoinColumn()
    Precios: Productos[]

    @OneToMany(() => Productos_marca, (productos_marca) => productos_marca.id_producto)
    @JoinColumn()
    Productos_marca: Productos[]
}