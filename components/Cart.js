import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartContext from "../context/CartContext";

function Cart() {
  const { cart, itemCount, totalPrice, removeItem, getLocalCart } =
    useContext(CartContext);

  useEffect(() => {
    getLocalCart();
  }, []);

  return (
    <div className="flex flex-col p-4">
      <div className="mb-3 border-b border-gray-300">
        <h4 className="text-md">Total {itemCount} Items</h4>
      </div>
      <div className="">
        {cart.length != 0
          ? cart.map((product, i) => {
              return (
                <a key={i} className="flex mb-4 pr-5 relative">
                  <span className="absolute right-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => {
                        removeItem(product._id, i);
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div className="flex-shrink-0">
                    <Image
                      width="60"
                      height="75"
                      src={`${process.env.IMG_LINK}${product.img}`}
                    />
                  </div>
                  <div className="pl-4">
                    <h5 className="font-bold mr-2">{product.title}</h5>
                    <p className="text-sm">{product.price} Kč</p>
                  </div>
                </a>
              );
            })
          : "Tvůj košík je prázdný"}
      </div>
      <div className="mt-auto">
        <div className="flex justify-between border-t mt-4 pt-4">
          <h4>Součet:</h4>
          <h4>{totalPrice} Kč</h4>
        </div>
        <div className="flex justify-around mt-4">
          <a
            href="#"
            className="w-1/2 py-1.5 px-2 duration-300 text-center bg-red-600 border border-red-600 rounded-sm text-white font-bold hover:bg-white hover:text-red-600"
          >
            Zobrazit košík
          </a>
          <Link href="/checkout/cart">
            <a className="w-1/2 ml-4 py-1.5 px-2 lg:py-4 duration-300 text-center bg-white border border-red-600 rounded-sm text-red-600 font-bold hover:bg-red-600 hover:text-white">
              Dokončit
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
