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
exports.Facturas_ventas_productos = void 0;
const typeorm_1 = require("typeorm");
const Facturas_1 = require("./Facturas");
const Productos_almacen_1 = require("./Productos_almacen");
let Facturas_ventas_productos = class Facturas_ventas_productos extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => Facturas_1.Facturas, (facturas) => facturas.id_facturas),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Facturas_ventas_productos.prototype, "id_factura", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Productos_almacen_1.Productos_almacen, (productos) => productos.id_producto),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Facturas_ventas_productos.prototype, "id_producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Productos_almacen_1.Productos_almacen, (almacenes) => almacenes.id_almacen),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Facturas_ventas_productos.prototype, "id_almacen", void 0);
Facturas_ventas_productos = __decorate([
    (0, typeorm_1.Entity)('facturas_ventas_productos')
], Facturas_ventas_productos);
exports.Facturas_ventas_productos = Facturas_ventas_productos;
