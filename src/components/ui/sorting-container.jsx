import React, { useContext, useState } from "react";
import { SelectedSortingContext } from "../../context";
import { icons } from "./icon";

// Sorting options with unique IDs and sorting values
const options = [
  {
    id: crypto.randomUUID(),
    label: "Low to High",
    value: "a-z",
  },
  {
    id: crypto.randomUUID(),
    label: "High to Low",
    value: "z-a",
  },
];

const SortingContainer = () => {
  // State to toggle the dropdown menu open/closed
  const [open, setOpen] = useState(false);

  // Access selected sorting and handler function from context
  const [selectedSorting, handleSorting] = useContext(SelectedSortingContext);

  // Helper function to get the label of the current sorting option based on selected value
  const activeSorting = options.filter((o) => o.value === selectedSorting);

  return (
    <div className="relative inline-block text-left">
      <div>
        {/* Button to open/close sorting dropdown */}
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          {/* Display selected sorting option label or default text */}
          {selectedSorting === "" ? "Sort" : activeSorting[0].label}
          {icons.arrowDown}
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        {/* Render sorting options only if dropdown is open */}
        {open && (
          <div className="py-1" role="none">
            {options.map(({ id, label, value }) => (
              <span
                // When an option is clicked, update the selected sorting
                onClick={() => handleSorting(value)}
                key={id}
                className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all ${
                  selectedSorting === value && "bg-gray-50"
                }`}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortingContainer;
