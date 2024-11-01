import React from "react";
import SearchTermProvider from "../../provider/search-term-provider";
import SelectedCategoryProvider from "../../provider/selected-category-provider";
import SortingProvider from "../../provider/sorting-provider";
import NewArrivalFilterContainer from "../ui/new-arrival-filter-container";
import NewArrivalHeader from "../ui/new-arrival-header";
import ProductsContainer from "../ui/products-container";

const NewArrivals = () => {
  return (
    <SearchTermProvider>
      <SelectedCategoryProvider>
        <SortingProvider>
          <div className="pt-16 sm:pt-24 lg:pt-40">
            <NewArrivalHeader />
            <NewArrivalFilterContainer />
            <ProductsContainer />
          </div>
        </SortingProvider>
      </SelectedCategoryProvider>
    </SearchTermProvider>
  );
};

export default NewArrivals;
