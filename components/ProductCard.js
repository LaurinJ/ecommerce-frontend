import React from "react";

function ProductCard({ product }) {
  let discount = 0;
  if (product.price < product.old_price) {
    discount = ((product.old_price - product.price) / (product.old_price / 100)).toFixed(0);
  }
  return (
    <div className="w-full md:w-1/3 sm:w-1/2 bg-white px-3 mb-6">
      <div className="shadow-xl">
        <div className="relative">
          <img loading="lazy" src={product.img} alt="product" />
          {product.price < product.old_price ? (
            <div className=" w-9 h-9 flex items-center justify-center absolute top-2 left-2 bg-yellow-400 text-xs font-bold rounded-full">
              -{discount}%
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="p-4">
          <a href="" className="font-medium">
            <h3>{product.name}</h3>
          </a>
          <div className="">
            {product.price < product.old_price ? (
              <span className="mr-1">
                <s>{product.old_price}Kč</s>
              </span>
            ) : (
              ""
            )}
            <span className="font-bold text-red-600">{product.price}Kč</span>
          </div>
        </div>
        <button
          className="
                      w-full
                      py-2
                      bg-red-600
                      text-white
                      border border-red-600
                      uppercase
                      hover:bg-white
                      hover:text-red-600
                    "
        >
          <span className="me-1">
            <i className="icon-cart"></i>
          </span>
          Přidat do košíku
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
