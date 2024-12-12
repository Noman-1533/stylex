import { SearchResponse } from "../models";
import apiClient from "./api-client";

export const getSearchResults = async (
  query: string,
  sortBy: string,
  orderBy: string
) => {
  const { data } = await apiClient.get<SearchResponse>(
    `products/search?q=${query}${sortBy ? `&sortBy=${sortBy}` : ""}${
      orderBy ? `&orderBy=${orderBy}` : ""
    }`
  );
  return orderBy === "desc"
    ? { ...data, products: data.products.reverse() }
    : data;
};
