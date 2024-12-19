export interface CategoryGalleryProps {
  galleryItems: SingleCategoryGalleryItem[];
}
export interface SingleCategoryAPIResponse {
  name?: string;
  url?: string;
  slug?: string;
}
export interface SingleCategoryGalleryItem extends SingleCategoryAPIResponse {
  image: string;
}
