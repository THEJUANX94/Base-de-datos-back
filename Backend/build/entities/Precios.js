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
exports.Precios = void 0;
const typeorm_1 = require("typeorm");
const Productos_1 = require("./Productos");
let Precios = class Precios extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Precios.prototype, "id_precio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Productos_1.Productos, (producto) => producto.id_producto, { nullable: true }),
    __metadata("design:type", Number)
], Precios.prototype, "id_producto", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", String)
], Precios.prototype, "fecha_inicio_precio", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", String)
], Precios.prototype, "fecha_fin_precio", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], Precios.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], Precios.prototype, "impuesto_precio", void 0);
Precios = __decorate([
    (0, typeorm_1.Entity)('precios')
], Precios);
exports.Precios = Precios;
