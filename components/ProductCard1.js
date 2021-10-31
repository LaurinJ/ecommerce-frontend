import React from "react";
import Image from "next/image";
import Rating from "./Rating";

function ProductCard({ product }) {
  let discount = 0;
  if (product.price < product.old_price) {
    discount = (
      (product.old_price - product.price) /
      (product.old_price / 100)
    ).toFixed(0);
  }
  return (
    <div className="-mt-px -mr-px  border border-gray-300 ">
      <article className="p-[10px]">
        <a className="block relative mx-2.5">
          <Image
            src={product.img}
            layout="responsive"
            width="200"
            height="240"
          />
          {product.price < product.old_price ? (
            <div className=" w-9 h-9 flex items-center justify-center absolute top-3 right-2 bg-yellow-400 text-xs font-bold rounded-full">
              -{discount}%
            </div>
          ) : (
            ""
          )}
        </a>
        <div className="flex flex-col mt-3">
          {/* rating */}
          <div className="flex items-center space-x-2">
            <Rating count={product.rating} />
            <span>{Math.floor(Math.random() * 1000)}x</span>
          </div>

          {/* title */}
          <a href="" className="mt-2">
            <h3 className="h-[72px] md:h-[130px] lg:h-[72px] text-lg leading-6 font-light">
              {product.title}
            </h3>
          </a>

          {/* price */}
          <div className="flex flex-col my-[10px]">
            <div className="min-h-[21px] text-xl leading-[30px]">
              <del className="block text-sm leading-[14px] text-gray-500">
                {product.price < product.old_price
                  ? product.old_price + " Kč"
                  : ""}
              </del>
            </div>
            <div>
              <span className="text-xl font-bold leading-[30px]">
                {product.price} Kč
              </span>
            </div>
          </div>
          <div className="flex mb-1">
            <div className="">
              <button className="block h-[30px] px-[10px] leading-[28px] text-sm font-bold text-white items-center justify-center cursor-pointer bg-red-700 border-2 border-transparent rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block relative align-text-top top-[2px] mr-[3px]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Přidat do košíku
              </button>
            </div>
            <div className="hidden xl:block ml-[10px] leading-[28px]">
              <label className="">
                <input type="checkbox" className="h-5 w-5 align-middle mr-1" />
                <span className="text-sm ">Porovnat</span>
              </label>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;
