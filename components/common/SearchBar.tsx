/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Apr 12 2022 09:23:31 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { ChangeEventHandler, useState } from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {
    placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    const [query, setQuery] = useState("");

    const handleQueryChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        setQuery(e.target.value);

    return (
        <div className="flex items-center bg-gray-100 rounded-md">
            <div className="p-3">
                <MdSearch size={28} />
            </div>
            <input
                className="w-min p-3 pl-0 text-lg focus:w-full h-full bg-transparent
                duration-200 ease-in-out rounded-md outline-none"
                type="text"
                placeholder={placeholder}
                onChange={handleQueryChange}
                value={query}
            />
        </div>
    );
};

export default SearchBar;
