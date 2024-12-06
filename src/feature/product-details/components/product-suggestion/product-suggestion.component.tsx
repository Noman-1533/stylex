import { useQuery } from "@tanstack/react-query";
import { getProductSuggestion } from "../../api";
import {
  CardProps,
  ProductCarousel,
  QueryTime,
  ShimmerCarouselLoader,
  transformToCardProps,
} from "../../../shared";

export default function ProductSuggestions({
  category,
  limit = 10,
  skip = 0,
}: {
  category: string;
  limit?: number;
  skip?: number;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: [`Product-suggestions-${category}`],
    queryFn: () => getProductSuggestion(category, limit, skip),
    staleTime: QueryTime.STALE,
  });
  let carouselData: CardProps[] = [];
  if (data) carouselData = transformToCardProps(data.products);

  if (isLoading) return <ShimmerCarouselLoader />;
  if (error)
    return (
      <div>
        {error.name}
        <br />
        {error.message}
      </div>
    );
  return (
    carouselData.length > 0 && (
      <ProductCarousel
        products={carouselData}
        carouselTitle="YOU MIGHT ALSO LIKE"
      />
    )
  );
}
