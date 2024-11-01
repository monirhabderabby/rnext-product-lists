// Packages
import React, { useState } from "react";

// Local imports
import { SelectedSortingContext } from "../context";

const SortingProvider = ({ children }) => {
  // State to store the currently selected sorting option
  const [selectedSorting, setSelectedSorting] = useState("");

  // Function to toggle sorting order selection
  const handleSorting = (order) => {
    // If the same sorting order is selected, reset it; otherwise, updating with new order
    if (order === selectedSorting) {
      setSelectedSorting("");
    } else {
      setSelectedSorting(order);
    }
  };

  return (
    <SelectedSortingContext.Provider value={[selectedSorting, handleSorting]}>
      {children}
    </SelectedSortingContext.Provider>
  );
};

export default SortingProvider;
