import { Request, Response } from 'express';
import { Descuentos_producto } from '../entities/Descuentos_producto';

export const createDescuento_producto = async (req: Request, res: Response) => {
    try {
        const { id_producto, id_descuento, fecha_inicio_descuento, fecha_fin_descuento } = req.body

        const descuentos_producto = new Descuentos_producto()
        descuentos_producto.id_producto = id_producto
        descuentos_producto.id_descuento = id_descuento
        fecha_inicio_descuento.replace('-', '/')
        descuentos_producto.fecha_inicio_descuento = fecha_inicio_descuento
        fecha_fin_descuento.replace('-', '/')
        descuentos_producto.fecha_fin_descuento = fecha_fin_descuento

        await descuentos_producto.save()
        res.status(200).json("Guardado correctamente")
        console.log(descuentos_producto)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getDescuentos_producto = async (req: Request, res: Response) => {
    try {
        const descuentos_producto = await Descuentos_producto.find()
        return res.json(descuentos_producto);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const UpdateDescuentos_producto = async (req: Request, res: Response) => {
    try {
        const { fecha_fin_descuento } = req.body
        const descuentos_producto = await Descuentos_producto.findOneBy({ id_producto: parseInt(req.params.id_producto) , id_descuento: parseInt(req.params.id_descuento)})
        if (!descuentos_producto) return res.status(404).json({ message: 'user dont exists' })
        fecha_fin_descuento.replace('-', '/')
        descuentos_producto.fecha_fin_descuento = fecha_fin_descuento;
        
        descuentos_producto.save();
        return res.json('recibido')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export const deleteDescuentos_producto = async (req: Request, res: Response) => {
    try {
        const { id_producto, id_descuento } = req.body

        const result = await Descuentos_producto.delete({ id_producto: parseInt(id_producto) , id_descuento: parseInt(id_descuento) })

        if (result.affected === 0) {
            return res.status(404).json({ message: 'User not found' })
        }
        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }

    }
}

export const getDescuento_producto = async (req: Request, res: Response) => {
    try {
        const { id_producto, id_descuento } = req.params
        const descuentos_producto = await Descuentos_producto.findOneBy({ id_producto: parseInt(id_producto) , id_descuento: parseInt(id_descuento) })
        return res.json(descuentos_producto)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}