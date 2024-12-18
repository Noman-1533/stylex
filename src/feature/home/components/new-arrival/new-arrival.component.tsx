import { useQuery } from "@tanstack/react-query";
import { newArrival } from "../../api";
import {
  ProductCarousel,
  QueryTime,
  ShimmerCarouselLoader,
  transformToCardProps,
} from "../../../shared";
import CustomError from "../../../../error.component";

export default function NewArrival() {
  const {
    data: newArrivalData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`new-arrival-${window.innerWidth}`],
    queryFn: newArrival,
    staleTime: QueryTime.STALE,
  });

  const handleViewNewArrival = () => {
    console.log("clicked form new arrival");
  };

  if (isLoading) return <ShimmerCarouselLoader />;
  if (error) return <CustomError message={error.message} name={error.name} />;
  return (
    newArrivalData && (
      <ProductCarousel
        carouselTitle="NEW ARRIVAL"
        products={transformToCardProps(
          newArrivalData.products.slice(0, window.innerWidth <= 1420 ? 4 : 5)
        )}
        showMoreButton={true}
        buttonText="show more"
        onClickButton={handleViewNewArrival}
      />
    )
  );
}
