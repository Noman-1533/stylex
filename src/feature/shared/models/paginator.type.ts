import { Dispatch, SetStateAction } from "react";

export interface PaginatorProps {
  totalElement: number;
  elementPerPage: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  setSkip: Dispatch<SetStateAction<number>>;

  paginationButtonStyle?: string;
  activeButtonStyle?: string;
}
