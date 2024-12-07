import { SearchResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";

export const getProductSuggestion = async (
  category: string,
  limit = 10,
  skip = 0
) => {
  const { data } = await apiClient.get<SearchResponse>(
    `products/category/${category}?limit=${limit}&&skip=${skip}`
  );
  return data;
};
