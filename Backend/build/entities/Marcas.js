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
exports.Marcas = void 0;
const typeorm_1 = require("typeorm");
const Proveedores_1 = require("./Proveedores");
const Productos_marca_1 = require("./Productos_marca");
let Marcas = class Marcas extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Marcas.prototype, "id_marca", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Proveedores_1.Proveedores, (proveedor) => proveedor.id_proveedor),
    __metadata("design:type", Number)
], Marcas.prototype, "id_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 50 }),
    __metadata("design:type", String)
], Marcas.prototype, "nombre_marca", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Productos_marca_1.Productos_marca, (productos_marca) => productos_marca.id_marca),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Marcas.prototype, "Productos_marca", void 0);
Marcas = __decorate([
    (0, typeorm_1.Entity)('marcas')
], Marcas);
exports.Marcas = Marcas;
