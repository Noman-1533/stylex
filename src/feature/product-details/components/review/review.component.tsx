import { ProductReview, Rating, Title } from "../../../shared";
import { ReviewProps } from "../../models/review.type";
import { FaCheckCircle } from "react-icons/fa";

export default function Reviews({ reviews }: { reviews: ProductReview[] }) {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {reviews.map((review, index) => (
          <Review
            review={review.comment}
            postedOn={review.date}
            reviewerName={review.reviewerName}
            rating={review.rating}
            key={`${review.reviewerEmail}-${index}`}
          />
        ))}
      </div>
    </>
  );
}
export function Review({
  rating,
  reviewerName,
  postedOn,
  review,
}: ReviewProps) {
  return (
    <>
      <div className="border rounded-lg p-4 m-2 border-gray-200">
        <Rating rating={rating} maxRating={5} />
        <Title>
          <span className="flex items-center gap-2 text-2xl font-bold">
            {reviewerName} <FaCheckCircle className="text-green-500" />
          </span>
          <p>{review}</p>
          <p>{postedOn}</p>
        </Title>
      </div>
    </>
  );
}
