import { CartTypeAPIResponse } from "../models";

export function transformCartAPIResponse(cartsFromAPI: CartTypeAPIResponse) {
  //   let modifiedData: SingleCartItemType[] = [];
  //   cartsFromAPI.carts.forEach((carts) => {
  //     modifiedData = [...modifiedData, ...carts.products];
  //   });
  //   return modifiedData;
  return cartsFromAPI.carts.flatMap((cart) => cart.products);
}
