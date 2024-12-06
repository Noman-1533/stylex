import { ProductResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";

export const getProductDetails = async (id: string) => {
  const { data } = await apiClient.get<ProductResponse>(`products/${id}`);
  return data;
};
