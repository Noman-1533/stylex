import { SearchResponse } from "../models";
import apiClient from "./api-client";

export const getSearchResults = async (query: string) => {
  const { data } = await apiClient.get<SearchResponse>(
    `products/search?q=${query}`
  );
  return data;
};
