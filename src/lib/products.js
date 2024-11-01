// Filters products based on a search term (case-insensitive)
export const searchProducts = (products, searchterm) => {
  if (!products || !searchterm) return products;

  // Filter products where the title includes the search term, ignoring case
  const result = products.filter((p) =>
    p.title.toLowerCase().includes(searchterm.toLowerCase())
  );

  return result.length ? result : products;
};

// Sorts products based on specified order: "a-z" for ascending, "z-a" for descending
export const sortingProducts = (products, order) => {
  if (!products || !order) return products;

  if (order === "a-z") {
    // Sort products by price in ascending order (low to high)
    products.sort((a, b) => a.price - b.price);
  } else if (order === "z-a") {
    // Sort products by price in descending order (high to low)
    products.sort((a, b) => b.price - a.price);
  }

  return products;
};
