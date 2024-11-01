import { useEffect, useState } from "react";

export const useGetAllCategories = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getAllCategories = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch categories lists with status ${response.status}`
        );
      }

      const categories = await response.json();
      setData(categories);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return {
    loading,
    error,
    data,
  };
};
