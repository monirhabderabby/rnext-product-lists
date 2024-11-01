// Packages
import React, { useContext } from "react";

// Local imports
import { SearchTermContext, SelectedSortingContext } from "../../context";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import { searchProducts, sortingProducts } from "../../lib/products";
import ProductCard from "../common/cards/product-card";
import ProductCardSkeleton from "../common/cards/product-card-skeleton"; // Skeleton component for loading state

const ProductsContainer = () => {
  // Destructure loading, products data, and error state from custom hook
  let { loading, data: products, error } = useGetAllProducts();
  const { searchTerm } = useContext(SearchTermContext);
  const [selectedSorting] = useContext(SelectedSortingContext);

  products = searchProducts(products, searchTerm);
  products = sortingProducts(products, selectedSorting);

  let content;

  // Render loading skeletons if data is still being fetched
  if (loading) {
    content = [1, 2, 3, 4, 5, 6].map((n) => <ProductCardSkeleton key={n} />);
  }
  // Display error message if fetching data failed
  else if (error) {
    content = (
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 h-[200px] flex justify-center items-center text-red-500">
        {error}
      </div>
    );
  }
  // Display message if product list is empty
  else if (products?.length === 0) {
    content = (
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 h-[200px] flex justify-center items-center text-gray-500">
        Product List is Empty!
      </div>
    );
  }
  // Map through and display each product when data is available
  else if (products?.length > 0) {
    content = products.map((p) => <ProductCard key={p.id} product={p} />);
  }

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Product grid layout with responsive columns */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
