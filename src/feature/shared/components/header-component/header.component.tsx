import { useState } from "react";
import BrandLogo from "../brand-logo-component/brand-logo.component";
import { FaBars } from "react-icons/fa";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Divider from "../divider/divider.component";
import { useNavigate } from "react-router-dom";
import Search from "../search-component/search.component";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between lg:justify-evenly">
        <div className="flex items-center">
          <div className="w-8 px-2 text-lg md:hidden cursor-pointer ">
            <span
              onClick={() => setNavToggle((pre) => !pre)}
              className="relative"
            >
              <FaBars className={`${!navToggle ? "inline-block" : "hidden"}`} />
              <FaX className={`${navToggle ? "inline-block" : "hidden"}`} />
              <span className={`${navToggle ? "block" : "hidden"}`}>
                <NavBar />
              </span>
            </span>
          </div>
          <span>
            <span className="hidden md:inline-block">
              <BrandLogo
                brandName="StyleX"
                height="50"
                width="125"
                viewBox="0 0 125 50"
              />
            </span>
            <span className="inline-block md:hidden">
              <BrandLogo
                brandName="StyleX"
                height="40"
                width="95"
                viewBox="0 0 95 40"
                fontWeight="700"
              />
            </span>
          </span>
          <div className="hidden md:inline-block">
            <NavBar />
          </div>
        </div>
        {/* <div className="relative"> */}
        {/* </div> */}

        <span className="flex flex-row gap-4 items-center mr-2">
          <Search />
          <span className="flex gap-0.5">
            <FaCartShopping
              className="text-lg lg:text-2xl cursor-pointer"
              onClick={handleCartClick}
            />{" "}
            <span className="text-sm w-[1rem] text-white px-1  h-[1.2rem] -my-1 rounded-full bg-red-600">
              4
            </span>
          </span>
          <CgProfile className="text-lg lg:text-2xl" />
        </span>
      </div>
      <Divider width="w-full " />
    </div>
  );
}

function NavBar() {
  const navItems = [
    {
      id: 1,
      name: "Shop",
      linkTo: "products/shop",
    },
    {
      id: 2,
      name: "Categories",
      linkTo: "products/categories",
    },
    {
      id: 3,
      name: "Best Products",
      linkTo: "products/best-products",
    },
    {
      id: 4,
      name: "Brands",
      linkTo: "products/brands",
    },
  ];
  const navigate = useNavigate();
  const handleNavigate = (linkTo: string) => navigate(linkTo);
  return (
    <div className="md:relative absolute top-10 md:top-0 -ml-2  bg-gray-200 w-[100vw] md:w-auto md:bg-transparent shadow-md md:shadow-none  z-10 ">
      <ul className="flex  flex-col md:flex-row gap-4 md:gap-[.125rem] ">
        {navItems.map((nav) => (
          <li
            key={nav.id}
            className="hover:bg-gray-100 hover:shadow-lg hover:rounded-md"
          >
            <a
              onClick={() => handleNavigate(nav.linkTo)}
              className="cursor-pointer mx-auto my-auto md:mx-1 md:my-1 px-2 py-2"
            >
              {" "}
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
