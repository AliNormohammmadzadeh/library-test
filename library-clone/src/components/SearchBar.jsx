import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="relative mr-14 text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Search Library"
          className="bg-white h-11 mt-1 px-14 pl-4 text-sm focus:outline-none  border-2 border-gray-300 transition-colors duration-300 focus:border-green-500"
        />
        <button
          type="submit"
          className="absolute border-2  rounded-r border-stone-600  bg-green-500 text-black p-3"
          style={{ marginTop: "0.28rem" }}
        >
          <BiSearch />
        </button>
      </div>
      <div className="flex space-x-4 mt-2">
        <div className="flex flex-col items-start">
          <div className="mb-2">
            <label htmlFor="library-website" className="inline-flex items-center">
              <input type="radio" id="library-website" name="search-type" value="library-website" className="form-radio h-5 w-5 text-green-600" />
              <span className="ml-2 text-gray-700">Library website</span>
            </label>
          </div>
          <div>
            <label htmlFor="catalogue" className="inline-flex items-center">
              <input type="radio" id="catalogue" name="search-type" value="catalogue" className="form-radio h-5 w-5 text-green-600" />
              <span className="ml-2 text-gray-700">Catalogue</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
