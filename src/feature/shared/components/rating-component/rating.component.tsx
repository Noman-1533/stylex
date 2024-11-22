import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfStroke as halfStar,
} from "@fortawesome/free-solid-svg-icons";

import { RatingProps } from "../../models";

export default function Rating({ rating, maxRating }: RatingProps) {
  // Generate filled stars
  const fullStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FontAwesomeIcon
      key={`full-${index}`}
      icon={solidStar}
      className="text-yellow-400 text-sm md:text-base lg:text-lg"
    />
  ));

  // Add a half-star if applicable
  const hasHalfStar = rating > Math.floor(rating);
  const halfStarIcon = hasHalfStar && (
    <FontAwesomeIcon
      key="half"
      icon={halfStar}
      className="text-yellow-400 text-sm md:text-base lg:text-lg"
    />
  );

  return (
    <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4">
      {/* Stars */}
      <div className="flex flex-row items-center gap-1 md:gap-2 lg:gap-3">
        {fullStars}
        {halfStarIcon}
      </div>

      {/* Rating Text */}
      <div className="flex items-end text-sm md:text-base lg:text-lg text-gray-800">
        <span>{rating}/</span>
        <span className="text-gray-500">{maxRating}</span>
      </div>
    </div>
  );
}
