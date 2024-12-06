import { ProductReview, Rating, Title } from "../../../shared";
import { ReviewProps } from "../../models/review.type";
import { FaCheckCircle } from "react-icons/fa";

export default function Reviews({ reviews }: { reviews: ProductReview[] }) {
  return (
    <>
      <div className=" p-2 w-[96%] ml-auto mr-auto  ">
        <div>
          <Title extraClasses="mb-2 mt-2 md:mb-3 md:mt-3 lg:mb-4 lg:mt-4">
            <div className="flex flex-row items-end gap-1">
              <h2 className="font-bold text-3xl">All Reviews</h2>
              <span className="text-xl">({reviews.length})</span>
            </div>
          </Title>
        </div>
        <div className="flex flex-wrap justify-evenly lg:justify-between gap-6 ">
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
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(postedOn));

  return (
    <>
      <div className="border rounded-lg p-4 w-full md:w-[46%] border-gray-200">
        <Rating rating={rating} maxRating={5} />
        <Title>
          <span className="flex items-center gap-2 text-2xl font-bold">
            {reviewerName} <FaCheckCircle className="text-green-500" />
          </span>
          <span className="text-gray-500">
            <p>
              {review} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quos, harum? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Blanditiis, aliquam!
            </p>
            <p>Posted on {formattedDate}</p>
          </span>
        </Title>
      </div>
    </>
  );
}
