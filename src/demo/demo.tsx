import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../feature";
import Price from "../feature/shared/components/price-component/price.component";
import Rating from "../feature/shared/components/rating-component/rating.component";

export default function Demo() {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <>
      <div className="ml-5 mt-6">
        <div>
          <Button
            label="View all"
            rounded="FULL"
            width="w-full md:w-36 lg:w-40"
            customStyle="mb-2"
            backgroundColor="bg-blue-500 hover:bg-blue-700"
            color="text-white"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
        <div>
          <Rating rating={3.5} maxRating={5} />
        </div>
        <div>
          <Price price={250} discount={20} />
        </div>
        <div>
          <Price price={250} />
        </div>
      </div>
    </>
  );
}
