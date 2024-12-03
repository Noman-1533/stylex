import { CardProps } from "./card.type";

export interface ProductCarouselProps extends React.PropsWithChildren {
  products: CardProps[];
  carouselTitle: string;
  showMoreButton?: boolean;
  buttonText?: string;
  onClickButton?: () => void;
}
