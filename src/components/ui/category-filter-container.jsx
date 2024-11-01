// Packages
import React, { useContext, useState } from "react";

// Local imports
import { SelectedCategoryContext } from "../../context";
import { useGetAllCategories } from "../../hooks/useGetAllCategories";
import { icons } from "./icon";

const CategoryFilterContainer = () => {
  // State to manage the dropdown visibility
  const [open, setOpen] = useState(false);

  // Context to handle selected categories
  const [selectedCategory, handleSelectedCategory] = useContext(
    SelectedCategoryContext
  );

  // Custom hook for fetching categories
  const { loading, data: categories, error } = useGetAllCategories();

  let content;

  // Handling loading, error, and data states for the dropdown options
  if (loading) {
    content = <div className="px-4 py-2">Loading...</div>;
  } else if (error) {
    content = <div className="px-4 py-2 text-red-500">{error}</div>;
  } else if (categories) {
    content = categories.map((category) => (
      <label
        key={category}
        className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
      >
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4"
          checked={selectedCategory === category}
          onChange={() => handleSelectedCategory(category)}
        />
        <span className="ml-2">{category}</span>
      </label>
    ));
  }

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle the dropdown */}
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
        onClick={() => setOpen(!open)}
      >
        Filter
        {icons.arrowDown}
      </button>

      {/* Dropdown container */}
      <div
        className={`absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${
          open ? "" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-1">{content}</div>
      </div>
    </div>
  );
};

export default CategoryFilterContainer;
