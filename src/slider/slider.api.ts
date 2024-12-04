import apiClient from "./api-client";
import { SliderData } from "./slider.type";

export const getSliderData = async () => {
  const { data } = await apiClient.get<{
    success: boolean;
    data: SliderData[];
  }>("http://202.40.176.103:3000/api/user/cms/items?itemType=Banner");
  return data;
};
