import { ProductResponse } from "../../../shared";
import Reviews from "../review/review.component";

export default function Tabs({
  productData,
}: {
  productData: ProductResponse;
}) {
  return (
    <>
      <Reviews reviews={productData.reviews} />
    </>
  );
}
