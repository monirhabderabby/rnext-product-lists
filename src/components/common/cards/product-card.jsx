// Packages
import React, { memo, useContext, useMemo } from "react";

// Local imports
import { CartContext } from "../../../context";
import { icons } from "../../ui/icon";

const ProductCard = ({ product }) => {
  // Destructuring cart functions and items from CartContext
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // Destructuring product properties for easy access
  const { title, image, price, category, id } = product || {};

  // Memoize the check for whether the product is in the cart
  const isAdded = useMemo(() => cartItems?.includes(id), [cartItems, id]);

  const handleCart = () => {
    if (isAdded) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={image}
          alt={`Image of ${title}`}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>

      <div
        className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1  hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1"
        onClick={handleCart}
      >
        <div className="flex px-3 py-2 justify-center">
          {icons.beg}
          {isAdded ? "Remove from Cart" : " Add To Cart"}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
