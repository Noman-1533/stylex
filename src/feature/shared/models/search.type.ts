import { ProductResponse } from "./product.type";

export interface SearchResponse {
  products: ProductResponse[];
  total: number;
  skip: number;
  limit: number;
}

export interface SearchResultProps {
  response: SearchResponse;
  isLoading: boolean;
  isError: boolean;
  error: Error;
}
