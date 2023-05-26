"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTipo_producto = exports.deleteTipo_Producto = exports.UpdateTipo_producto = exports.getTipo_productos = exports.createTipoProducto = void 0;
const Tipo_producto_1 = require("../entities/Tipo_producto");
const createTipoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_tipo, nombre_tipo } = req.body;
        const tipo_producto = new Tipo_producto_1.Tipo_producto();
        tipo_producto.id_tipo = id_tipo;
        tipo_producto.nombre_tipo = nombre_tipo;
        yield tipo_producto.save();
        res.status(200).json("Guardado correctamente");
        console.log(tipo_producto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createTipoProducto = createTipoProducto;
const getTipo_productos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipo_producto = yield Tipo_producto_1.Tipo_producto.find();
        return res.json(tipo_producto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getTipo_productos = getTipo_productos;
const UpdateTipo_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_tipo } = req.body;
        const tipo_producto = yield Tipo_producto_1.Tipo_producto.findOneBy({ id_tipo: parseInt(req.params.id_tipo) });
        if (!tipo_producto)
            return res.status(404).json({ message: 'user dont exists' });
        tipo_producto.nombre_tipo = nombre_tipo;
        tipo_producto.save();
        return res.json('recibido');
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.UpdateTipo_producto = UpdateTipo_producto;
const deleteTipo_Producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_tipo } = req.params;
        const result = yield Tipo_producto_1.Tipo_producto.delete({ id_tipo: parseInt(id_tipo) });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteTipo_Producto = deleteTipo_Producto;
const getTipo_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_tipo } = req.params;
        const tipo_producto = yield Tipo_producto_1.Tipo_producto.findOneBy({ id_tipo: parseInt(id_tipo) });
        return res.json(tipo_producto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getTipo_producto = getTipo_producto;
