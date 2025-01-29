import { CartTypeAPIResponse } from "../models";
import apiClient from "../../shared/api/api-client";
import { transformCartAPIResponse } from "../utils";

export const getCartByUser = async (userId: number | undefined) => {
  if (userId === undefined) throw new Error("user id need");
  const { data } = await apiClient.get<CartTypeAPIResponse>(
    `/carts/user/${userId}`
  );
  // console.log(`data for use ${userId}`, transformCartAPIResponse(data));

  return await transformCartAPIResponse(data);
};
