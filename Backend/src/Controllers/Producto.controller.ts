import { Request, Response } from 'express';
import { Productos } from '../entities/Productos';

export const getProductos = async (req: Request, res: Response) => {
    try {
        const producto = await Productos.find()
        return res.json(producto);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const getProducto = async (req: Request, res: Response) => {
    try {
        const { id_producto } = req.params
        const producto = await Productos.findOneBy({ id_producto: parseInt(id_producto)})
        return res.json(producto)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}