import { Descuentos } from "../interfaces/Descuentos";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getDiscounts = async (): Promise<AxiosResponse<Descuentos[]>> =>
  await axios.get("/descuentos");

export const getProduct = async (
  id_descuento: number
): Promise<AxiosResponse<Descuentos>> =>
  await axios.get(`/descuentos/${id_descuento}`);
