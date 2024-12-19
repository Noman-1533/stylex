import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getViewData } from "../../api";
import { QueryTime } from "../../enums";
import ShimmerPageLoader from "../shimmer-effect/shimmer-effect.component";
import CustomError from "../../../../error.component";
import { transformToCardProps } from "../../utils";
import Card from "../card-component/card.component";
import { useEffect, useState } from "react";
import Paginator from "../paginator-component/paginator.component";

export default function ViewProducts() {
  const { endpoint } = useParams();

  const productPerPage = 20;
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const {
    data: viewData,
    isLoading: viewLoading,
    error: viewError,
  } = useQuery({
    queryKey: [`views-${endpoint}-${page}`],
    queryFn: () => getViewData(endpoint as string, productPerPage, skip),
    staleTime: QueryTime.STALE,
  });
  useEffect(() => {
    setPage(1);
    setSkip(0);
  }, [endpoint]);

  if (viewLoading) return <ShimmerPageLoader />;
  if (viewError)
    return <CustomError message={viewError.message} name={viewError.name} />;

  return (
    viewData && (
      <>
        <div className="flex flex-wrap justify-evenly">
          {transformToCardProps(viewData.products).map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              price={card.price}
              discount={card.discount}
              imageURL={card.imageURL}
              rating={card.rating}
            />
          ))}
        </div>
        <Paginator
          totalElement={viewData.total}
          elementPerPage={productPerPage}
          currentPage={page}
          setPage={setPage}
          setSkip={setSkip}
        />
      </>
    )
  );
}
