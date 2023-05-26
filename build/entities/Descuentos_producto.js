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
exports.Descuentos_producto = void 0;
const typeorm_1 = require("typeorm");
const Descuentos_1 = require("./Descuentos");
const Productos_1 = require("./Productos");
let Descuentos_producto = class Descuentos_producto extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => Productos_1.Productos, (id_producto) => id_producto.id_producto),
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Descuentos_producto.prototype, "id_producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Descuentos_1.Descuentos, (id_descuentos) => id_descuentos.id_descuentos),
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Descuentos_producto.prototype, "id_descuento", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", String)
], Descuentos_producto.prototype, "fecha_inicio_descuento", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", String)
], Descuentos_producto.prototype, "fecha_fin_descuento", void 0);
Descuentos_producto = __decorate([
    (0, typeorm_1.Entity)('descuentos_producto')
], Descuentos_producto);
exports.Descuentos_producto = Descuentos_producto;
