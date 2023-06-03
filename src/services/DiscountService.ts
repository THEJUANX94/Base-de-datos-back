import { DescuentosProducto } from "../interfaces/DescuentosProducto";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getDiscounts = async (): Promise<AxiosResponse<DescuentosProducto[]>> =>
  await axios.get("/descuento_producto");

export const getDiscount = async (id_producto: number, id_descuento: number): Promise<AxiosResponse<DescuentosProducto>> =>
  await axios.get(`/descuento_producto/${id_producto}/${id_descuento}`);

export const createDiscount = async (descuentosProducto: DescuentosProducto): Promise<AxiosResponse> =>
  await axios.post("/descuento_producto", descuentosProducto);

// export const updateTask = async (
//   id: string,
//   newTask: Task
// ): Promise<AxiosResponse<Task>> => await axios.put(`/tasks/${id}`, newTask);

export const deleteTask = async (id_producto: number, id_descuento: number): Promise<AxiosResponse> =>
  await axios.delete(`/descuento_producto/${id_producto}/${id_descuento}`);