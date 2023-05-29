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
exports.Facturas = void 0;
const typeorm_1 = require("typeorm");
const Proveedores_1 = require("./Proveedores");
const Facturas_compra_productos_1 = require("./Facturas_compra_productos");
const Facturas_ventas_productos_1 = require("./Facturas_ventas_productos");
let Facturas = class Facturas extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Facturas.prototype, "id_facturas", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Proveedores_1.Proveedores, (id_proveedor) => id_proveedor.id_proveedor, { nullable: true }),
    __metadata("design:type", Number)
], Facturas.prototype, "id_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", String)
], Facturas.prototype, "fecha_factura", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], Facturas.prototype, "valor_factura", void 0);
__decorate([
    (0, typeorm_1.Column)("char", { length: 1 }),
    __metadata("design:type", String)
], Facturas.prototype, "tipo_factura", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Facturas_compra_productos_1.Facturas_compras_productos, (facturas_compras_productos) => facturas_compras_productos.id_factura),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Facturas.prototype, "Facturas_compras_productos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Facturas_ventas_productos_1.Facturas_ventas_productos, (facturas_ventas_productos) => facturas_ventas_productos.id_factura),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Facturas.prototype, "Facturas_ventas_productos", void 0);
Facturas = __decorate([
    (0, typeorm_1.Entity)('facturas')
], Facturas);
exports.Facturas = Facturas;
