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
exports.getDescuento = exports.getDescuentos = void 0;
const Descuentos_1 = require("../entities/Descuentos");
const getDescuentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const descuento = yield Descuentos_1.Descuentos.find();
        return res.json(descuento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getDescuentos = getDescuentos;
const getDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_descuentos } = req.params;
        const descuento = yield Descuentos_1.Descuentos.findOneBy({ id_descuentos: parseInt(id_descuentos) });
        return res.json(descuento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getDescuento = getDescuento;
