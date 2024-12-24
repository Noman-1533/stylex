import { APIResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";

export const getCategoryProduct = async (categoryName: string) => {
  const { data } = await apiClient.get<APIResponse>(
    `product/category/${categoryName}`
  );
  return data;
};
