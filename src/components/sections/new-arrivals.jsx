import React from "react";
import SelectedCategoryProvider from "../../provider/selected-category-provider";
import NewArrivalFilterContainer from "../ui/new-arrival-filter-container";
import NewArrivalHeader from "../ui/new-arrival-header";
import ProductsContainer from "../ui/products-container";

const NewArrivals = () => {
  return (
    <SelectedCategoryProvider>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <NewArrivalHeader />
        <NewArrivalFilterContainer />
        <ProductsContainer />
      </div>
    </SelectedCategoryProvider>
  );
};

export default NewArrivals;
