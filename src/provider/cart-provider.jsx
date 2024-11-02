// Packages
import React, { useEffect, useState } from "react";

// Local imports
import { CartContext } from "../context";

const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage or an empty array if nothing is stored
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Sync cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (productId) => {
    setCartItems((prev) => [...prev, productId]);
  };

  // Function to remove a product from the cart by filtering it out
  const removeFromCart = (productId) => {
    const filtered = cartItems.filter((cId) => cId !== productId);
    setCartItems(filtered);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
