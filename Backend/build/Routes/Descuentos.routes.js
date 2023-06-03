"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Descuentos_controller_1 = require("../Controllers/Descuentos.controller");
const router = (0, express_1.Router)();
router.get("/descuentos", Descuentos_controller_1.getDescuentos);
router.get("/descuentos/:id_descuentos", Descuentos_controller_1.getDescuento);
exports.default = router;
