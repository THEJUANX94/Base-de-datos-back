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
exports.Productos_marca = void 0;
const typeorm_1 = require("typeorm");
const Productos_1 = require("./Productos");
const Marcas_1 = require("./Marcas");
let Productos_marca = class Productos_marca extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => Productos_1.Productos, (productos) => productos.id_producto),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Productos_marca.prototype, "id_producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Marcas_1.Marcas, (marcas) => marcas.id_marca),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Productos_marca.prototype, "id_marca", void 0);
Productos_marca = __decorate([
    (0, typeorm_1.Entity)('productos_marca')
], Productos_marca);
exports.Productos_marca = Productos_marca;
