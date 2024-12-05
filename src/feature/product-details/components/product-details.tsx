import { ProductResponse, QueryTime, ShimmerPageLoader } from "../../shared";
import { getProductDetails } from "../api";
import ImageGallery from "./image-gallery/image-gallery.component";
import { useQuery } from "@tanstack/react-query";
import ShortDetails from "./short-details/short-details.component";
import Tabs from "./tabs/tabs.component";

export default function ProductDetails() {
  const id = 192;
  const { data, isLoading, error } = useQuery({
    queryKey: [`details-${id}`],
    queryFn: () => getProductDetails(id),
    staleTime: QueryTime.STALE,
  });
  if (error) return <h1>Error occurred</h1>;
  if (isLoading) return <ShimmerPageLoader />;
  return (
    <>
      <div className="flex flex-col md:flex-row xl:justify-center">
        <ImageGallery images={data?.images as string[]} />
        <ShortDetails
          productTitle={data?.title as string}
          ProductDetails={data?.description as string}
          ProductDiscount={data?.discountPercentage as number}
          ProductPrice={data?.price as number}
          ProductRating={data?.rating as number}
        />
      </div>
      <Tabs productData={data as ProductResponse} />
    </>
  );
}
