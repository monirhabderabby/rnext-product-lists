import React, { useState } from "react";
import { SelectedCategoryContext } from "../context";

// Provider component to manage selected category state across the app
const SelectedCategoryProvider = ({ children }) => {
  // State to store the currently selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Toggle function for category selection
  const handleSelectedCategory = (category) => {
    // Deselect if the category is already selected; otherwise, set as selected
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <SelectedCategoryContext.Provider
      value={[selectedCategory, handleSelectedCategory]}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export default SelectedCategoryProvider;
