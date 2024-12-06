import {
  ProductResponse,
  ProductReview,
  QueryTime,
  ShimmerPageLoader,
} from "../../shared";
import { getProductDetails } from "../api";
import ImageGallery from "./image-gallery/image-gallery.component";
import { useQuery } from "@tanstack/react-query";
import ShortDetails from "./short-details/short-details.component";
import Tabs from "./tabs/tabs.component";
import Reviews from "./review/review.component";
import { ProductFullDetails } from "..";
import ProductSuggestions from "./product-suggestion/product-suggestion.component";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [`details-${id}`],
    queryFn: () => getProductDetails(id as string),
    staleTime: QueryTime.STALE,
  });

  const tabs = [
    {
      title: "Product Details",
      content: <ProductFullDetails product={data as ProductResponse} />,
    },
    {
      title: "Rating & Reviews",
      content: <Reviews reviews={data?.reviews as ProductReview[]} />,
    },
    {
      title: "FAQs",
      content: <div className="w-full font-bold text-3xl">FAQS</div>,
    },
  ];
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
      <Tabs tabs={tabs} />
      {data?.category && (
        <ProductSuggestions
          category={data?.category as string}
          limit={6}
          skip={0}
        />
      )}
    </>
  );
}
