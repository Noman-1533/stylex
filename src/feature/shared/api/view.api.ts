import { newArrival, topSelling } from "../../home";
import { getProducts } from "./products.api";

export const getViewData = async (endpoint: string, limit = 0, skip = 0) => {
  switch (endpoint) {
    case "top-selling":
    case "best-products": {
      return topSelling(limit, skip);
    }
    case "new-arrival": {
      return newArrival(limit, skip);
    }
    default: {
      return getProducts(limit, skip);
    }
  }
};
