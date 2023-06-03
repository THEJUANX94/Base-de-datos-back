"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const Tipo_productos_routes_1 = __importDefault(require("./Routes/Tipo_productos.routes"));
const Descuentos_producto_routes_1 = __importDefault(require("./Routes/Descuentos_producto.routes"));
const Producto_routes_1 = __importDefault(require("./Routes/Producto.routes"));
const Descuentos_routes_1 = __importDefault(require("./Routes/Descuentos.routes"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(Tipo_productos_routes_1.default);
app.use(Descuentos_producto_routes_1.default);
app.use(Producto_routes_1.default);
app.use(Descuentos_routes_1.default);
exports.default = app;
