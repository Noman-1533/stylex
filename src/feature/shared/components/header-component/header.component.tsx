import { useEffect, useRef, useState } from "react";
import BrandLogo from "../brand-logo-component/brand-logo.component";
import { FaBars } from "react-icons/fa";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Divider from "../divider/divider.component";
import { useNavigate } from "react-router-dom";
import Search from "../search-component/search.component";
import { useAuthedUser } from "../../../../provider";
import Button from "../button-component/button.component";
import { SubHeaderProps } from "../../models";
import Title from "../title-component/title.component";
import { useCartContext } from "../../../cart/components/cart-container-component/cart-container.component";
// import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const { carts: cartItems } = useCartContext();
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const [profileToggle, setProfileToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const navMenu = navRef.current;
    const profileMenu = profileRef.current;

    if (navMenu && !navMenu.contains(e.target as Node)) {
      setNavToggle(false); // Close nav menu if click is outside
    }
    if (profileMenu && !profileMenu.contains(e.target as Node)) {
      setProfileToggle(false); // Close profile menu if click is outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  function getCartNumber() {
    if (cartItems) {
      return cartItems.length;
    }
    return 0;
  }

  // const queryClient = useQueryClient();
  // const state = queryClient.getQueryData(["currentUser"]);
  // if (state) console.log("state of the user", state);
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between lg:justify-evenly">
        <div className="flex items-center">
          <div className="w-8 px-2 text-lg md:hidden cursor-pointer ">
            <span
              ref={navRef}
              onClick={() => {
                setProfileToggle(false);
                setNavToggle((pre) => !pre);
              }}
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
            <span
              className="hidden md:inline-block cursor-pointer"
              onClick={() => navigate("/home")}
            >
              <BrandLogo
                brandName="StyleX"
                height="50"
                width="125"
                viewBox="0 0 125 50"
              />
            </span>
            <span
              className="inline-block md:hidden cursor-pointer"
              onClick={() => navigate("/home")}
            >
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
          <span
            className="flex gap-0.5 cursor-pointer"
            onClick={handleCartClick}
          >
            <FaCartShopping className="text-lg lg:text-2xl " />{" "}
            <span className="text-sm  text-white px-1  h-[1.2rem] -my-1 rounded-full bg-red-600">
              {getCartNumber()}
            </span>
          </span>
          <span ref={profileRef} className="cursor-pointer">
            <ProfileView
              currentToggleState={profileToggle}
              setCurrentToggleState={setProfileToggle}
            />
          </span>
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
      linkTo: "/categories",
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
    <div className="md:relative absolute left-1 top-10 md:top-0 -ml-2  bg-gray-200 w-[50vw] md:w-auto md:bg-transparent shadow-md md:shadow-none  z-10 ">
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

function ProfileView({
  currentToggleState,
  setCurrentToggleState,
}: SubHeaderProps) {
  const { user: authedUser, logout, authenticated } = useAuthedUser();
  const { handleCartOnLogout } = useCartContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    handleCartOnLogout();
    // navigate("/home");
  };
  return (
    <>
      <div className="relative">
        <CgProfile
          className="text-lg lg:text-2xl"
          onClick={() => {
            setCurrentToggleState((prev) => !prev);
          }}
        />
        <div
          className={`${
            currentToggleState ? "block" : "hidden"
          } absolute -right-1.5 lg:-right-full xl:-right-28 top-6 lg:top-10 xl:top-7 w-[50vw] md:w-32 lg:w-48   bg-gray-500 text-white z-10 rounded-lg cursor-default`}
        >
          {authenticated &&
            authedUser &&
            "id" in authedUser &&
            authedUser.id && (
              <div className="flex flex-col items-center my-2 mx-2">
                <Title>
                  Hi, {authedUser.firstName + " " + authedUser.lastName}
                </Title>
                <Button
                  label="logout"
                  width="w-full"
                  onClick={handleLogout}
                  padding="px-2 py-1"
                  extraClasses="hover:border hover:border-white hover:text-gray-200 my-2 hover:rounded-full"
                />
              </div>
            )}
          {!authenticated && (
            <div className="flex flex-col gap-2 my-2 mx-2">
              <Button
                label="Login"
                width="w-full"
                onClick={() => {
                  setCurrentToggleState(false);
                  navigate("/login");
                }}
                padding="px-2 py-1"
                extraClasses="hover:text-gray-200 hover:outline rounded-full"
              />
              <Button
                label="Signup"
                width="w-full"
                padding="px-2 py-1"
                onClick={() => {
                  setCurrentToggleState(false);
                  navigate("/sign-up");
                }}
                extraClasses="hover:text-gray-200 hover:outline rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
