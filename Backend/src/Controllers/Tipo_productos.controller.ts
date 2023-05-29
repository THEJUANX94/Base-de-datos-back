import { Request, Response } from 'express';
import { Tipo_producto } from '../entities/Tipo_producto';

export const createTipoProducto = async (req: Request, res: Response) => {
    try {
        co { id_tipo, nombre_tipo } = req.body

        const tipo_producto = new Tipo_producto()
        tipo_producto.id_tipo = id_tipo
        tipo_producto.nombre_tipo = nombre_tipo

        await tipo_producto.save()
        res.status(200).json("Guardado correctamente")
        console.log(tipo_producto)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

export const getTipo_productos = async (req: Request, res: Response) => {
    try {
        const tipo_producto = await Tipo_producto.find()
        return res.json(tipo_producto);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const UpdateTipo_producto = async (req: Request, res: Response) => {
    try {
        const { nombre_tipo } = req.body
        const tipo_producto = await Tipo_producto.findOneBy({ id_tipo: parseInt(req.params.id_tipo) })
        if (!tipo_producto) return res.status(404).json({ message: 'user dont exists' })
        tipo_producto.nombre_tipo = nombre_tipo;
        
        tipo_producto.save();
        return res.json('recibido')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export const deleteTipo_Producto = async (req: Request, res: Response) => {
    try {
        const { id_tipo } = req.params

        const result = await Tipo_producto.delete({ id_tipo: parseInt(id_tipo) })

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

export const getTipo_producto = async (req: Request, res: Response) => {
    try {
        const { id_tipo } = req.params
        const tipo_producto = await Tipo_producto.findOneBy({ id_tipo: parseInt(id_tipo) })
        return res.json(tipo_producto)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}