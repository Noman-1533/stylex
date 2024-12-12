import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PaginatorProps } from "../../models";
import Button from "../button-component/button.component";

export default function Paginator({
  totalElement,
  elementPerPage,
  currentPage,
  setPage,
  setSkip,
  paginationButtonStyle,
  activeButtonStyle,
}: PaginatorProps) {
  const totalPages = Math.ceil(totalElement / elementPerPage);

  const getPaginationRange = () => {
    const range: (string | number)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, 4, 5, "...");
      } else if (currentPage >= totalPages - 2) {
        range.push(
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        range.push(
          "...",
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          "..."
        );
      }
    }

    return range;
  };

  const pages = getPaginationRange();

  return (
    <div className="flex justify-around items-center  mb-2">
      <Button
        disabled={currentPage === 1}
        label={window.innerWidth < 500 ? "" : "Prev"}
        width="w-12 md:w-24"
        onClick={() => {
          setPage(currentPage - 1);
          setSkip((pre) => pre - elementPerPage);
        }}
        iconPosition="left"
        extraClasses="border border-gray-400 rounded-md"
      >
        <FaArrowLeft />
      </Button>
      <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-4 justify-center">
        {pages.map((page, index) => {
          return (
            <Button
              key={index}
              label={page.toString()}
              onClick={() => {
                if (typeof page === "number") {
                  setPage(page);
                  setSkip((page - 1) * elementPerPage);
                }
              }}
              width="w-8 sm:w-4 h-8 sm:h-4"
              customStyles={`${
                paginationButtonStyle
                  ? `${paginationButtonStyle}`
                  : `${
                      typeof page === "number"
                        ? ` border border-2 border-gray-400 rounded-sm sm:px-1 sm:py-1 sm:border-1 ${
                            page !== currentPage ? "hover:bg-yellow-200" : ""
                          }`
                        : ""
                    }`
              }`}
              extraClasses={
                page === currentPage
                  ? activeButtonStyle
                    ? `${activeButtonStyle}`
                    : "bg-yellow-300 border-yellow-300"
                  : ""
              }
              disabled={typeof page !== "number"}
            />
          );
        })}
      </div>
      <Button
        label={window.innerWidth < 500 ? "" : "Next"}
        disabled={currentPage === totalPages}
        width="w-12 md:w-24"
        onClick={() => {
          setPage(currentPage + 1);
          setSkip((pre) => pre + elementPerPage);
        }}
        extraClasses="border border-gray-400 rounded-md"
      >
        <FaArrowRight />
      </Button>
    </div>
  );
}
