import { useQuery } from "@tanstack/react-query";
import { topSelling } from "../../api";
import {
  ProductCarousel,
  QueryTime,
  ShimmerCarouselLoader,
  transformToCardProps,
} from "../../../shared";
import CustomError from "../../../../error.component";

export default function TopSelling() {
  const {
    data: topSellingData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`top-selling-products-${window.innerWidth}`],
    queryFn: topSelling,
    staleTime: QueryTime.STALE,
  });

  const handleShowMore = () => {
    console.log("click form top selling");
  };

  if (isLoading) return <ShimmerCarouselLoader />;
  if (error) return <CustomError message={error.message} name={error.name} />;

  return (
    topSellingData && (
      <ProductCarousel
        carouselTitle="TOP SELLING"
        products={transformToCardProps(
          topSellingData.products.slice(0, window.innerWidth <= 1420 ? 4 : 5)
        )}
        showMoreButton={true}
        buttonText="show more"
        onClickButton={handleShowMore}
      />
    )
  );
}
