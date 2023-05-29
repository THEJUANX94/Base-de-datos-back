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
exports.Almacenes = void 0;
const typeorm_1 = require("typeorm");
const Lugares_1 = require("./Lugares");
let Almacenes = class Almacenes extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int"),
    __metadata("design:type", Number)
], Almacenes.prototype, "id_almacen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Lugares_1.Lugares, (Lugares) => Lugares.id_lugar),
    __metadata("design:type", Number)
], Almacenes.prototype, "id_lugar", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 200 }),
    __metadata("design:type", String)
], Almacenes.prototype, "nombre_almacen", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 200 }),
    __metadata("design:type", String)
], Almacenes.prototype, "direccion", void 0);
Almacenes = __decorate([
    (0, typeorm_1.Entity)('almacenes')
], Almacenes);
exports.Almacenes = Almacenes;
