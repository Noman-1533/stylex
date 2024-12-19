import { APIResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";

export const topSelling = async (limit: number = 0, skip: number = 0) => {
  const { data } = await apiClient.get<APIResponse>(
    `products?sortBy=rating&order=desc&limit=${limit}&skip=${skip}`
  );
  return data;
};
