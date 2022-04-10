import React, { useContext, useState } from "react";
import Image from "next/image";
import CartContext from "../context/CartContext";
import { useNotification } from "../context/NotificationProvider";

function FavoriteProductCard({ product, i }) {
  const dispatch = useNotification();
  const { addItem } = useContext(CartContext);

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {/* image section */}
        <div className="w-20 relative sm:w-[7.5rem] sm:h-[5.6rem] mr-5 mb-5 h-auto">
          <Image
            src={`${process.env.IMG_LINK}${product.imgurl}`}
            width={140}
            height={185}
            layout="responsive"
          />
        </div>
        {/* description section */}
        <div className="cartitem_product_info mb-5 min-h-[150px] lg:min-h-[130px]">
          <h4 className="mb-2 sm:text-lg font-semibold">{product.title}</h4>
          <div className="my-4 text-sm sm:text-base text-gray-600">
            <span>{product.short_description}</span>
          </div>
        </div>

        {/* price section */}
        <div className="flex ml-4 sm:ml-0 text-[0.625rem] sm:text-xs font-medium text-gray-800 text-right">
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
        </div>
        {/* product actions section */}
        <div className="mr-4 sm:mr-0 space-y-2">
          <button
            onClick={() => {
              removeItem(product._id, i);
            }}
            className="flex font-normal lg:text-lg text-blue-600 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <button
            onClick={() => {
              addItem(product, 1);
              dispatch({
                type: "SUCCESS",
                message: "Produkt byl úspěšně přidán",
                title: "Successful Request",
              });
            }}
            className="flex font-normal lg:text-lg text-green-600 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Přidat do košíků
          </button>
        </div>
      </div>
      <hr className="mt-8 pb-8 text-gray-300" />
    </>
  );
}

export default FavoriteProductCard;
