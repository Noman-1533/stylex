import { ProductResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";

export const getProductDetails = async (id: number) => {
  const { data } = await apiClient.get<ProductResponse>(`products/${id}`);
  return data;
};
