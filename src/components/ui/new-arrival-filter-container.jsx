import React from "react";
import Cart from "./cart";
import CategoryFilterContaier from "./category-filter-container";
import Search from "./search";
import SortingContainer from "./sorting-container";

const NewArrivalFilterContainer = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <SortingContainer />
          <CategoryFilterContaier />
        </div>
        <div className="flex gap-2 items-center">
          <Search />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default NewArrivalFilterContainer;
