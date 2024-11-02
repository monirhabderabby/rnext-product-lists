// Packages
import React, { useContext } from "react";

// Local imports
import { CartContext } from "../../context";
import { icons } from "./icon";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        {icons.cart}
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cartItems?.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
};

export default Cart;
