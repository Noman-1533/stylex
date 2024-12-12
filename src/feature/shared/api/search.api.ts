import { SearchResponse } from "../models";
import apiClient from "./api-client";

export const getSearchResults = async (
  query: string,
  sortBy: string,
  orderBy: string,
  limit: number,
  skip: number
) => {
  const { data } = await apiClient.get<SearchResponse>(
    `products/search?q=${query}${sortBy ? `&sortBy=${sortBy}` : ""}${
      orderBy ? `&orderBy=${orderBy}` : ""
    }${limit ? `&limit=${limit}` : ""}${skip ? `&skip=${skip}` : ""}`
  );
  // const { data } = await apiClient.get<SearchResponse>(
  //   `products?${sortBy ? `&sortBy=${sortBy}` : ""}${
  //     orderBy ? `&orderBy=${orderBy}` : ""
  //   }${limit ? `&limit=${limit}` : ""}${skip ? `&skip=${skip}` : ""}`
  // );
  return orderBy === "desc"
    ? { ...data, products: data.products.reverse() }
    : data;
};
