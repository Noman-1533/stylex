import { Tag } from "./tags.type";

export interface SidenavProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  tags: Tag[];
  minPrice: number;
  maxPrice: number;
  stepForPrice: number;
}
