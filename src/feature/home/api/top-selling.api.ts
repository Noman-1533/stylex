import { APIResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";

export const topSelling = async () => {
  const { data } = await apiClient.get<APIResponse>(
    "products?sortBy=rating&order=desc"
  );
  return data;
};
