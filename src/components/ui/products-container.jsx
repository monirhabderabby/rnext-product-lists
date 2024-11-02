// Packages
import React, { useContext, useMemo } from "react";

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

  // Memoize the filtered and sorted products to avoid recalculating on every render.
  const filteredAndSortedProducts = useMemo(() => {
    let result = products || [];
    result = searchProducts(result, searchTerm);
    return sortingProducts(result, selectedSorting);
  }, [products, searchTerm, selectedSorting]);

  const skeletonArray = useMemo(
    () => Array.from({ length: 6 }, (_, i) => i + 1),
    []
  );

  let content;

  // Render loading skeletons if data is still being fetched
  if (loading) {
    content = skeletonArray.map((n) => <ProductCardSkeleton key={n} />);
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
  else if (filteredAndSortedProducts?.length === 0) {
    content = (
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 h-[200px] flex justify-center items-center text-gray-500">
        Product List is Empty!
      </div>
    );
  }
  // Map through and display each product when data is available
  else if (filteredAndSortedProducts?.length > 0) {
    content = filteredAndSortedProducts.map((p) => (
      <ProductCard key={p.id} product={p} />
    ));
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
