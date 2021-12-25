import React, { useContext, useState } from "react";
import Image from "next/image";
import CartContext from "../context/CartContext";
import Counter from "./form/Counter";

function CartCheckoutProduct({ product, i }) {
  const { removeItem, updateItem } = useContext(CartContext);
  const [a, setA] = useState(false);
  const countHandle = (count) => {
    if (count < 1) {
      removeItem(product._id, i);
    } else {
      updateItem(product._id, count, i);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {/* image section */}
        <div className="w-20 relative sm:w-[7.5rem] sm:h-[5.6rem] mr-5 mb-5 h-auto">
          <Image
            src={`${process.env.IMG_LINK}${product.img}`}
            width={140}
            height={185}
            layout="responsive"
          />
        </div>
        {/* description section */}
        <div className="cartitem_product_info mb-5">
          <h4 className="mb-2 sm:text-lg font-semibold">{product.title}</h4>
          <div className="my-4 text-sm sm:text-base text-gray-600">
            <span>{product.short_description}</span>
          </div>
        </div>
        {/* amount section */}
        <div className="sm:order-4 lg:order-3 sm:ml-40 lg:ml-5">
          <Counter count={product.count} countHandle={countHandle} />
        </div>
        {/* price section */}
        <div className="sm:order-3 lg:order-4 flex text-[0.625rem] sm:text-xs font-medium text-gray-800 text-right">
          <div className="lg:w-[6.25rem]">
            Cena/Ks{" "}
            <div className="flex flex-col my-[10px]">
              <div className="text-sm text-red-500">
                <del>
                  {product.price < product.old_price
                    ? product.old_price + " Kč"
                    : ""}
                </del>
              </div>
              <div>
                <span className="sm:text-lg font-bold">{product.price} Kč</span>
              </div>
            </div>
          </div>

          <div className="ml-5 lg:w-[6.25rem]">
            Celkem{" "}
            <div className="flex flex-col my-[10px]">
              <div>
                <span className="sm:text-lg font-bold">
                  {product.price * product.count} Kč
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* information section */}
      <div className="sm:ml-40 lg:ml-36 my-4 flex text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        Během 3 pracovních dní
      </div>
      {/* delete product section */}
      <div className="sm:ml-40 lg:ml-36">
        <button
          onClick={() => {
            removeItem(product._id, i);
          }}
          className="flex font-normal lg:text-lg text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Odstranit
        </button>
      </div>
      <hr className="mt-8 pb-8 text-gray-300" />
    </>
  );
}

export default CartCheckoutProduct;
