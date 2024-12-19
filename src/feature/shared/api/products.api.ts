import { APIResponse } from "../models";
import apiClient from "./api-client";

export const getProducts = async (limit = 0, skip = 0) => {
  const { data } = await apiClient.get<APIResponse>(
    `products?limit=${limit}&skip=${skip}`
  );
  return await data;
};
