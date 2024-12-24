import { APIResponse } from "../../shared";
import apiClient from "../../shared/api/api-client";
import {
  SingleCategoryAPIResponse,
  SingleCategoryGalleryItem,
} from "../models";

export const getCategories = async (
  sliceStartPoint: number = 8,
  sliceEndPoint: number = 16
) => {
  const { data: categories } = await apiClient.get<SingleCategoryAPIResponse[]>(
    "products/categories"
  );

  const firstFourCategories =
    sliceEndPoint === 0
      ? categories
      : categories.slice(sliceStartPoint, sliceEndPoint);
  const updatedCategory: SingleCategoryGalleryItem[] = await Promise.all(
    firstFourCategories.map(async (category) => {
      const { data: imageProperty } = await apiClient.get<APIResponse>(
        `/products/category/${category.slug}?limit=1&select=thumbnail`
      );
      //   console.log("from inside images", imageProperty);
      return { ...category, image: imageProperty.products[0].thumbnail };
    })
  );
  //   console.log("form catAPI", updatedCategory);
  return updatedCategory;
};
