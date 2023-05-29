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
exports.Proveedores = void 0;
const typeorm_1 = require("typeorm");
const Facturas_1 = require("./Facturas");
const Marcas_1 = require("./Marcas");
let Proveedores = class Proveedores extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Proveedores.prototype, "id_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100, unique: true }),
    __metadata("design:type", String)
], Proveedores.prototype, "nombre_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 20 }),
    __metadata("design:type", String)
], Proveedores.prototype, "telefono_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 50, nullable: true }),
    __metadata("design:type", String)
], Proveedores.prototype, "correo_proveedor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Facturas_1.Facturas, (facturas) => facturas.id_proveedor),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Proveedores.prototype, "Facturas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Marcas_1.Marcas, (marcas) => marcas.id_proveedor),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Proveedores.prototype, "Marcas", void 0);
Proveedores = __decorate([
    (0, typeorm_1.Entity)('proveedores')
], Proveedores);
exports.Proveedores = Proveedores;
