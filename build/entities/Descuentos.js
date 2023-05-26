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
exports.Descuentos = void 0;
const typeorm_1 = require("typeorm");
const Descuentos_producto_1 = require("./Descuentos_producto");
let Descuentos = class Descuentos extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Descuentos.prototype, "id_descuentos", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], Descuentos.prototype, "descuento", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255 }),
    __metadata("design:type", String)
], Descuentos.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Descuentos_producto_1.Descuentos_producto, (id_descuentos) => id_descuentos.id_descuento),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Descuentos.prototype, "Descuentos_lugares", void 0);
Descuentos = __decorate([
    (0, typeorm_1.Entity)('descuentos')
], Descuentos);
exports.Descuentos = Descuentos;
