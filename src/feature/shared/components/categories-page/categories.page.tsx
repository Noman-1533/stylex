import { useQuery } from "@tanstack/react-query";
import CategoryGallery from "../../../home/components/category-gallery/cattegory-gallery.component";
import { getCategories } from "../../../home";
import ShimmerPageLoader from "../shimmer-effect/shimmer-effect.component";
import CustomError from "../../../../error.component";

export default function CategoriesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["category-page"],
    queryFn: () => getCategories(0, 0),
  });
  if (isLoading) return <ShimmerPageLoader />;
  if (error) return <CustomError name={error.name} message={error.message} />;
  return data && <CategoryGallery galleryItems={data} />;
}
