import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Productos } from "./Productos";
import { Marcas } from "./Marcas";

@Entity('productos_marca')
export class Productos_marca extends BaseEntity{

    @ManyToOne(() => Productos, (productos) => productos.id_producto)
    @PrimaryColumn()
    id_producto: number

    @ManyToOne(() => Marcas, (marcas) => marcas.id_marca)
    @PrimaryColumn()
    id_marca: number

}