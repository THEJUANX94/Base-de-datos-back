import { Productos } from "../interfaces/Productos";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getProducts = async (): Promise<AxiosResponse<Productos[]>> =>
  await axios.get("/productos");

export const getProduct = async (
  id_producto: number
): Promise<AxiosResponse<Productos>> =>
  await axios.get(`/productos/${id_producto}`);
