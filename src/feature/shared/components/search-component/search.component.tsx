import { ChangeEvent, useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery(encodeURIComponent(searchInputValue.trim()));
    }
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    if (query) navigate(`/search?query=${query}`);
  }, [query, navigate]);

  return (
    <>
      {/* Search bar for large screens */}
      <div className="hidden lg:inline-block  lg:w-[40vw] ">
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            className="w-full bg-[#F0F0F0] rounded-full pl-10 py-3"
            type="text"
            placeholder="Search for product"
            value={searchInputValue}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      </div>

      {/* Toggleable search for small screens */}
      {/* <span className="lg:hidden"> */}
      {!isSearchVisible && (
        <FontAwesomeIcon
          onClick={toggleSearch}
          icon={faSearch}
          className="text-gray-700 cursor-pointer lg:hidden"
        />
      )}

      {isSearchVisible && (
        <span className="relative w-auto ">
          <FontAwesomeIcon
            icon={faSearch}
            className=" absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            className="w-full  bg-[#F0F0F0] rounded-full pl-7 py-3"
            type="text"
            placeholder="Search for product"
            value={searchInputValue}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button
            onClick={toggleSearch}
            className=" absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600"
          >
            ✕
          </button>
        </span>
      )}
      {/* </span> */}
    </>
  );
}
