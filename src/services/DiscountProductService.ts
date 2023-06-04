import { DescuentosProducto } from "../interfaces/DescuentosProducto";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getDiscountsProduct = async (): Promise<
  AxiosResponse<DescuentosProducto[]>
> => await axios.get("/descuento_producto");

export const getDiscountProduct = async (
  id_producto: number,
  id_descuento: number
): Promise<AxiosResponse<DescuentosProducto>> =>
  await axios.get(`/descuento_producto/${id_producto}/${id_descuento}`);

export const createDiscount = async (
  descuentosProducto: DescuentosProducto
): Promise<AxiosResponse> =>
  await axios.post("/descuento_producto", descuentosProducto);

export const updateDiscount = async (
  id_producto: number,
  id_descuento: number,
  newDescuentosProducto: DescuentosProducto
): Promise<AxiosResponse<DescuentosProducto>> =>
  await axios.put(
    `/descuento_producto/${id_producto}/${id_descuento}`,
    newDescuentosProducto
  );

export const deleteDiscount = async (
  id_producto: number,
  id_descuento: number
): Promise<AxiosResponse> =>
  await axios.delete(`/descuento_producto/${id_producto}/${id_descuento}`);
