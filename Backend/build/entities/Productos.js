"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const typeorm_1 = require("typeorm");
const Tipo_producto_1 = require("./Tipo_producto");
const Descuentos_producto_1 = require("./Descuentos_producto");
const Facturas_compra_productos_1 = require("./Facturas_compra_productos");
const Precios_1 = require("./Precios");
const Productos_marca_1 = require("./Productos_marca");
let Productos = class Productos extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Productos.prototype, "id_producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tipo_producto_1.Tipo_producto, (Tipo_producto) => Tipo_producto.id_tipo),
    __metadata("design:type", Number)
], Productos.prototype, "id_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100 }),
    __metadata("design:type", String)
], Productos.prototype, "nombre_producto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Descuentos_producto_1.Descuentos_producto, (id_descuentos) => id_descuentos.id_descuento),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Productos.prototype, "Descuentos_lugares", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Facturas_compra_productos_1.Facturas_compras_productos, (facturas_compras_productos) => facturas_compras_productos.id_producto),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Productos.prototype, "Facturas_compras_productos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Precios_1.Precios, (precios) => precios.id_producto),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Productos.prototype, "Precios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Productos_marca_1.Productos_marca, (productos_marca) => productos_marca.id_producto),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Productos.prototype, "Productos_marca", void 0);
Productos = __decorate([
    (0, typeorm_1.Entity)('productos')
], Productos);
exports.Productos = Productos;
