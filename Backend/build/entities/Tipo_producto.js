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
exports.Tipo_producto = void 0;
const typeorm_1 = require("typeorm");
const Productos_1 = require("./Productos");
let Tipo_producto = class Tipo_producto extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Tipo_producto.prototype, "id_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 50 }),
    __metadata("design:type", String)
], Tipo_producto.prototype, "nombre_tipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Productos_1.Productos, (id_tipo) => id_tipo.id_tipo),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Tipo_producto.prototype, "Productos", void 0);
Tipo_producto = __decorate([
    (0, typeorm_1.Entity)('tipos_producto')
], Tipo_producto);
exports.Tipo_producto = Tipo_producto;
