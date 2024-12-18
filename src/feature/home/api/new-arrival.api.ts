import { APIResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";
export const newArrival = async () => {
  const { data } = await apiClient.get<APIResponse>("products");
  return data;
};
