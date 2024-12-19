import { useEffect, useMemo, useState } from "react";
import { SortParams } from "../../models";
import { useSearchParams } from "react-router-dom";

export default function Sort({
  defaultSort = "rating",
  defaultOrder = "desc",
}: {
  defaultSort: string;
  defaultOrder: string;
}) {
  const sortParameters: SortParams[] = useMemo(
    () => [
      {
        name: "Most Popular",
        sortBy: "rating",
        orderBy: "desc",
      },
      {
        name: "Least Popular",
        sortBy: "rating",
        orderBy: "asc",
      },
      {
        name: "Most Expensive",
        sortBy: "price",
        orderBy: "desc",
      },
      {
        name: "Least Expensive",
        sortBy: "price",
        orderBy: "asc",
      },
      {
        name: "Title (A to Z)",
        sortBy: "title",
        orderBy: "asc",
      },
      {
        name: "Title (Z to A)",
        sortBy: "title",
        orderBy: "desc",
      },
      {
        name: "Highest Discount",
        sortBy: "discountPercentage",
        orderBy: "desc",
      },
      {
        name: "Lowest Stock",
        sortBy: "stock",
        orderBy: "asc",
      },
      {
        name: "Highest Stock",
        sortBy: "stock",
        orderBy: "desc",
      },
    ],
    []
  );
  const [selectedOption, setSelectedOption] = useState<number>(
    sortParameters.findIndex(
      (item) => item.sortBy === defaultSort && item.orderBy === defaultOrder
    )
  );
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const selectedSort = sortParameters[selectedOption];
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      newParams.set("sortBy", encodeURIComponent(selectedSort.sortBy));
      newParams.set("orderBy", encodeURIComponent(selectedSort.orderBy));

      return newParams;
    });
  }, [selectedOption, searchParams, setSearchParams, sortParameters]);

  return (
    <div>
      <label htmlFor="sort" className="m-2">
        Sort By:
      </label>
      <span className="relative">
        <select
          className="outline-none font-bold w-auto "
          name="sort"
          id="sort"
          value={selectedOption}
          onChange={(e) => setSelectedOption(Number(e.target.value))}
        >
          {sortParameters.map((item, index) => (
            <option
              className="text-gray-700 bg-white hover:bg-gray-100"
              value={index}
              key={item.name}
            >
              {item.name}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}
