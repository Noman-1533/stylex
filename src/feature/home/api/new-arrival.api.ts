import { APIResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";
export const newArrival = async (limit = 0, skip = 0) => {
  const { data } = await apiClient.get<APIResponse>(
    `products?limit=${limit}&skip=${skip}`
  );
  return data;
};
