/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Apr 30 2022 19:08:03 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useAsyncDebounce } from "react-table";

interface Props {
  filter: string | undefined;
  setFilter: (filter: string | undefined) => void;
  placeholder: string;
}

export const GlobalFilter = ({ filter, setFilter, placeholder }: Props) => {
  const [query, setQuery] = useState(filter);

  // debounce event listener
  const handleQueryChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 2000);

  return (
    <div className="my-4 w-1/2 ml-auto flex items-center bg-white rounded-md shadow">
      <div className="p-3">
        <MdSearch size={24} />
      </div>
      <input
        className="w-full p-3 pl-0 text-lg focus:w-full h-full bg-transparent
        duration-200 ease-in-out rounded-md outline-none"
        type="text"
        placeholder={placeholder}
        value={query || ""}
        onChange={(e) => {
          setQuery(e.target.value);
          handleQueryChange(e.target.value);
        }}
      />
    </div>
  );
};
