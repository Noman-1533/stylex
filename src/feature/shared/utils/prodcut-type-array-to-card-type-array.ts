import { ProductResponse, CardProps } from "../models";

export function transformToCardProps(products: ProductResponse[]): CardProps[] {
  return products.map((product) => ({
    id: product.id,
    title: product.title,
    imageURL: product.thumbnail, // Using thumbnail as the image
    rating: product.rating,
    price: product.price,
    discount: product.discountPercentage,
  }));
}
