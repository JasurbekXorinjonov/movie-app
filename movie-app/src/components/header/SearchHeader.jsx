// import SearchPanel from "./SearchInput";

import { useState } from "react";

function SearchHeader() {
  const [searchText, setsearchText] = useState("");

  const searchHendler = (event) => {
    setsearchText(event.target.value);
  };

  return (
    <div className="bg mx-auto w-full bg-[url('https://picsum.photos/1440/300')] bg-no-repeat  ">
      <div className="container mx-auto p-2">
        <h1 className="mt-12 text-5xl font-bold text-white">Welcome.</h1>
        <h1
          className="text-2xl font-bold text-white
        "
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </h1>
        <div className="flex items-center">
          {/* <SearchPanel /> */}
          <input
            className=" my-12 w-full rounded-3xl p-3 outline-none"
            type="search"
            placeholder="Search for a movie, tv show, person....."
            onChange={searchHendler}
          />
          <button className=" -ml-24 rounded-3xl bg-[#18CFB5] px-7 py-3 text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
