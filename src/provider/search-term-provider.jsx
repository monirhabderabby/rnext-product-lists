// Packages
import React, { useState } from "react";

// Local imports
import { SearchTermContext } from "../context";
import { useDebounce } from "../hooks/useDebounce";

const SearchTermProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounced function to update the search term with a delay of 1000ms
  const doSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 500);

  // Handler function to initiate debounced search
  const handleSearch = (searchText) => {
    doSearch(searchText);
  };

  return (
    <SearchTermContext.Provider value={{ searchTerm, handleSearch }}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermProvider;
