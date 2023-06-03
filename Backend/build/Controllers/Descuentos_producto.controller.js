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
exports.getDescuento_producto = exports.deleteDescuentos_producto = exports.UpdateDescuentos_producto = exports.getDescuentos_producto = exports.createDescuento_producto = void 0;
const Descuentos_producto_1 = require("../entities/Descuentos_producto");
const createDescuento_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_descuento, fecha_inicio_descuento, fecha_fin_descuento } = req.body;
        const descuentos_producto = new Descuentos_producto_1.Descuentos_producto();
        descuentos_producto.id_producto = id_producto;
        descuentos_producto.id_descuento = id_descuento;
        fecha_inicio_descuento.replace('-', '/');
        descuentos_producto.fecha_inicio_descuento = fecha_inicio_descuento;
        fecha_fin_descuento.replace('-', '/');
        descuentos_producto.fecha_fin_descuento = fecha_fin_descuento;
        yield descuentos_producto.save();
        res.status(200).json("Guardado correctamente");
        console.log(descuentos_producto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createDescuento_producto = createDescuento_producto;
const getDescuentos_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const descuentos_producto = yield Descuentos_producto_1.Descuentos_producto.find();
        return res.json(descuentos_producto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getDescuentos_producto = getDescuentos_producto;
const UpdateDescuentos_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fecha_fin_descuento } = req.body;
        const descuentos_producto = yield Descuentos_producto_1.Descuentos_producto.findOneBy({ id_producto: parseInt(req.params.id_producto), id_descuento: parseInt(req.params.id_descuento) });
        if (!descuentos_producto)
            return res.status(404).json({ message: 'user dont exists' });
        fecha_fin_descuento.replace('-', '/');
        descuentos_producto.fecha_fin_descuento = fecha_fin_descuento;
        descuentos_producto.save();
        return res.json('recibido');
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.UpdateDescuentos_producto = UpdateDescuentos_producto;
const deleteDescuentos_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_descuento } = req.body;
        const result = yield Descuentos_producto_1.Descuentos_producto.delete({ id_producto: parseInt(id_producto), id_descuento: parseInt(id_descuento) });
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
exports.deleteDescuentos_producto = deleteDescuentos_producto;
const getDescuento_producto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_descuento } = req.params;
        const descuentos_producto = yield Descuentos_producto_1.Descuentos_producto.findOneBy({ id_producto: parseInt(id_producto), id_descuento: parseInt(id_descuento) });
        return res.json(descuentos_producto);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getDescuento_producto = getDescuento_producto;
