import { Request, Response } from 'express';
import { Descuentos } from '../entities/Descuentos';

export const getDescuentos = async (req: Request, res: Response) => {
    try {
        const descuento = await Descuentos.find()
        return res.json(descuento);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const getDescuento = async (req: Request, res: Response) => {
    try {
        const { id_descuentos } = req.params
        const descuento = await Descuentos.findOneBy({ id_descuentos: parseInt(id_descuentos)})
        return res.json(descuento)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}