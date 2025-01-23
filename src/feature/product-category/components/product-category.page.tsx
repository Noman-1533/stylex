import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getCategoryProduct } from "../api/category-product.api";
import {
  Card,
  ProductResponse,
  QueryTime,
  ShimmerPageLoader,
  Title,
  transformToCardProps,
} from "../../shared";
import CustomError from "../../../error.component";
import { FaSliders } from "react-icons/fa6";
import { useState } from "react";
import Sidenav from "./side-nav/side-nav.component";
import { Tag } from "../models";
import { TransformCommaSeparatedStringToStringArray } from "../utils";
import { useCartContext } from "../../cart/components/cart-container-component/cart-container.component";
import { useAuthedUser } from "../../../provider";
import { SingleCartItemType } from "../../cart";

export default function ProductCategory() {
  const [toggle, setToggle] = useState(false);
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const { carts: currentCartItems, addToCart } = useCartContext();
  const { authenticated } = useAuthedUser();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: [`${categoryName}-product`],
    queryFn: () => getCategoryProduct(categoryName as string),
    staleTime: QueryTime.STALE,
  });

  let minPrice: number = 100;
  let maxPrice: number = 0;
  const tags: Tag[] = [];

  const Capitalize = (value: string) => {
    let str = "";
    str += value.charAt(0).toLocaleUpperCase();
    str += value.slice(1);
    return str;
  };

  const getFilteredData = (products: ProductResponse[]): ProductResponse[] => {
    const minPrice = parseInt(searchParams.get("minPrice") as string) || 0;
    const maxPrice =
      parseInt(searchParams.get("maxPrice") as string) || 10000000;
    const minRating = parseInt(searchParams.get("minRating") as string) || 0;
    const maxRating = parseInt(searchParams.get("maxRating") as string) || 5;
    const selectedTags = TransformCommaSeparatedStringToStringArray(
      searchParams.get("tags") as string
    );
    // console.log(
    //   "min-rating",
    //   minRating,
    //   "\nmax-rating",
    //   maxRating,
    //   "\nfrom searchParams max rating",
    //   searchParams.get("maxRating")
    // );
    const filterProducts = products.filter(
      (products) =>
        products.price >= minPrice &&
        products.price <= maxPrice &&
        products.rating >= minRating &&
        products.rating <= maxRating &&
        (selectedTags.length > 0
          ? selectedTags.some((tag) => products.tags.includes(tag))
          : true)
    );
    // console.log(filterProducts);
    return filterProducts;
  };
  const handleAddToCart = (newCartItem: SingleCartItemType) => {
    if (authenticated) {
      addToCart(newCartItem, currentCartItems!);
    } else navigate("/login");
  };
  if (data) {
    data.products.forEach((product) => {
      minPrice = Math.min(minPrice, Math.floor(product.price));
      maxPrice = Math.max(maxPrice, Math.ceil(product.price));
      product.tags.forEach((tag) => {
        const dummyTag: Tag = {
          name: Capitalize(tag),
          tag: tag,
        };
        if (!tags.some((existingTag) => existingTag.name === dummyTag.name))
          tags.push(dummyTag);
      });
    });
  }
  if (isLoading) return <ShimmerPageLoader />;
  if (error) return <CustomError name={error.name} message={error.message} />;

  return (
    data && (
      <div className="flex">
        <div className="hidden md:block min-w-[390px]">
          <Sidenav
            tags={tags}
            minPrice={minPrice}
            maxPrice={maxPrice}
            stepForPrice={Math.max(1, Math.floor((maxPrice - minPrice) / 100))}
            toggle={toggle}
            setToggle={setToggle}
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <Title font="font-bold" fontSize="text-xl px-2">
              <span style={{ textTransform: "capitalize" }}>
                {categoryName}
              </span>
            </Title>

            <span className="md:hidden">
              <FaSliders
                className={`md:hidden ${
                  toggle ? "hidden" : " justify-self-end mx-6"
                }`}
                onClick={() => setToggle(true)}
              />
            </span>
          </div>

          {toggle && (
            <>
              {/* Background Overlay */}
              <div
                className="md:hidden fixed inset-0 bg-black/50 z-10 transition-opacity"
                onClick={() => setToggle(false)} // Close sidebar when clicking outside
              ></div>
              {/* Sidebar */}
              <div className="fixed inset-0 top-16 z-20">
                <Sidenav
                  tags={tags}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  stepForPrice={Math.max(
                    1,
                    Math.floor((maxPrice - minPrice) / 100)
                  )}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              </div>
            </>
          )}
          <div className="flex flex-wrap justify-evenly">
            {transformToCardProps(getFilteredData(data.products)).map(
              (product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  rating={product.rating}
                  discountPercentage={product.discountPercentage}
                  onClickAddToCart={handleAddToCart}
                />
              )
            )}
          </div>
        </div>
      </div>
    )
  );
}
