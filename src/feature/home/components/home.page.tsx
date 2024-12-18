// import CategoryGallery from "./category-gallery/cattegory-gallery.component";
import NewArrival from "./new-arrival/new-arrival.component";
import SiteIntro from "./site-intro/site-intro.component";
import TopSelling from "./top-selling/top-selling.component";

export default function Home() {
  return (
    <div>
      <SiteIntro />
      <NewArrival />
      <TopSelling />
      {/* <CategoryGallery/> */}
    </div>
  );
}
