export interface CardProps {
  id: string;
  title?: string;
  imageURL?: string;
  rating?: number;
  price?: number;
  discount?: number;
  customStyles?: string;
  onClick?: (id: string) => void;
}
