import { useQuery } from "@tanstack/react-query";
import CategoryGallery from "./category-gallery/cattegory-gallery.component";
import NewArrival from "./new-arrival/new-arrival.component";
import SiteIntro from "./site-intro/site-intro.component";
import TopSelling from "./top-selling/top-selling.component";
import { getCategories } from "../api";
import { QueryTime, ShimmerCarouselLoader } from "../../shared";
import CustomError from "../../../error.component";

export default function Home() {
  const {
    data: categoryGalleryItems,
    isLoading: categoryItemsLoading,
    error: categoryItemsError,
  } = useQuery({
    queryKey: ["categoryGalleryItems"],
    queryFn: getCategories,
    staleTime: QueryTime.STALE,
  });
  // console.log(categoryGalleryItems);
  return (
    <div>
      <SiteIntro />
      <NewArrival />
      <TopSelling />

      {(categoryItemsLoading && <ShimmerCarouselLoader />) ||
        (categoryItemsError && (
          <CustomError
            message={categoryItemsError?.message}
            name={categoryItemsError?.name}
          />
        )) ||
        (categoryGalleryItems && (
          <CategoryGallery galleryItems={categoryGalleryItems} />
        ))}
    </div>
  );
}
