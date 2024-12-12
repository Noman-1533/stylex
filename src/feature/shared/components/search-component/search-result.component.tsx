import { useQuery } from "@tanstack/react-query";
import Card from "../card-component/card.component";
import { useSearchParams } from "react-router-dom";
import { getSearchResults } from "../../api";
import { QueryTime } from "../../enums";
import ShimmerPageLoader from "../shimmer-effect/shimmer-effect.component";
import Title from "../title-component/title.component";
import Sort from "../sort-component/sort.component";
import { useEffect } from "react";

export default function SearchResult() {
  const [searchParams] = useSearchParams();

  // Directly derive the `query` value from searchParams
  const paramValue = decodeURIComponent(searchParams.get("query") || "");
  const sortBy = decodeURIComponent(searchParams.get("sortBy") || "");
  const orderBy = decodeURIComponent(searchParams.get("orderBy") || "");
  useEffect(() => {
    console.log("from search", paramValue);
  }, [paramValue]);
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`search-${paramValue}-${sortBy}-${orderBy}`],
    queryFn: () => getSearchResults(paramValue, sortBy, orderBy),
    staleTime: QueryTime.STALE,
    enabled: !!paramValue, // Prevent query from running if paramValue is empty
  });

  if (isLoading) return <ShimmerPageLoader />;
  if (isError)
    return (
      <div className="bg-red-300 text-gray-300">
        Following Error occurred:
        <h2 className="text-2xl font-bold">{error.name}</h2>
        <p>{error.message}</p>
      </div>
    );
  if (response?.products.length === 0) {
    return (
      <div className="text-xl font-bold bg-red-300 text-gray-50 p-[20%]">
        NO such Product found. Please search for another product.
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-row justify-between w-4/5 mx-auto">
        <Title font="font-bold" fontSize="text-3xl">
          Search Results:
        </Title>
        <Sort
          defaultSort={sortBy ? sortBy : "rating"}
          defaultOrder={orderBy ? orderBy : "desc"}
        />
      </div>
      <div className="flex flex-row flex-wrap gap-3 justify-evenly">
        {response?.products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            rating={product.rating}
            price={product.price}
            discount={product.discountPercentage}
            imageURL={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
