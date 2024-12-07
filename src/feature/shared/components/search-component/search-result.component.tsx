import { useQuery } from "@tanstack/react-query";
import Card from "../card-component/card.component";
import { useSearchParams } from "react-router-dom";
import { getSearchResults } from "../../api";
import { QueryTime } from "../../enums";
import ShimmerPageLoader from "../shimmer-effect/shimmer-effect.component";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const paramValue = decodeURIComponent(searchParams.get("query") as string);
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`search-${paramValue}`],
    queryFn: () => getSearchResults(paramValue as string),
    staleTime: QueryTime.STALE,
  });

  if (isLoading) return <ShimmerPageLoader />;
  if (isError)
    return (
      <>
        <div className="bg-red-300 text-gray-300">
          Following Error occurred:
          <h2 className="text-2xl font-bold">{error.name}</h2>
          <p>{error.message}</p>
        </div>
      </>
    );
  if (response?.products.length === 0) {
    return (
      <div className="text-xl font-bold bg-red-300 text-gray-50 p-[20%]">
        NO such Product found please search another product
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-row flex-wrap gap-3 justify-evenly">
        {response?.products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              rating={product.rating}
              price={product.price}
              discount={product.discountPercentage}
              imageURL={product.thumbnail}
            />
          );
        })}
      </div>
    </>
  );
}
