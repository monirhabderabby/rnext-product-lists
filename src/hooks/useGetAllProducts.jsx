import { useContext, useEffect, useState } from "react";
import { SelectedCategoryContext, SelectedSortingContext } from "../context";

export const useGetAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // context
  const [selectedCategory] = useContext(SelectedCategoryContext);
  const [selectedSorting] = useContext(SelectedSortingContext);

  let fetchUrl;

  if (selectedCategory) {
    fetchUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
  } else {
    fetchUrl = `https://fakestoreapi.com/products`;
  }

  const getAllProducts = async (fetchUrl) => {
    setLoading(true);

    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error(`Can't fetch product with status: ${response.status}`);
      }

      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts(fetchUrl);
  }, [selectedCategory]);

  return {
    loading,
    error,
    data,
  };
};
