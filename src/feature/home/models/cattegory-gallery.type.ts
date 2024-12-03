export interface CategoryGalleryProps {
  galleryItems: SingleCategoryGalleryItem[];
}
export interface SingleCategoryGalleryItem {
  name?: string;
  image: string;
  url?: string;
  slug?: string;
}
