import { ChangeEvent, useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useQuery } from "@tanstack/react-query";
// import { getSearchResults } from "../../api";
// import { QueryTime } from "../../enums";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  //   const {
  //     data: searchResponse,
  //     isLoading,
  //     isError,
  //     error: SearchError,
  //   } = useQuery({
  //     queryKey: [`search-${searchInputValue}`],
  //     queryFn: () => getSearchResults(searchInputValue),
  //     staleTime: QueryTime.STALE,
  //     enabled: !!query,
  //   });
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
  useEffect(() => {
    if (query) navigate(`/search?query=${query}`);
  }, [query, navigate]);

  return (
    <div className="relative w-96 m-8">
      {/* Icon inside the input */}
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <input
        className="w-full border border-black rounded-xl pl-10 py-2"
        type="text"
        value={searchInputValue}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
}
