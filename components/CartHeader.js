import React, { useContext } from "react";
import Cart from "./Cart";
import CartContext from "../context/CartContext";

function CartHeader() {
  const { itemCount, totalPrice } = useContext(CartContext);
  return (
    <div className="hidden lg:block w-56 cart-h">
      <button
        type="button"
        className="py-10 flex items-center space-x-5 text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="">
          {itemCount} ks - {totalPrice} Kč
        </span>
      </button>
      <div className="lg-cart w-72 hidden d-block absolute rounded-b-lg z-20 bg-white drop-shadow-2xl">
        <Cart />
      </div>
    </div>
  );
}

export default CartHeader;
