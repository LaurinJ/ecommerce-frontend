import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/MenuContext";
import ProductCard from "../../components/ProductCard";
import FilterProducts from "../../components/FilterProducts";
import { products } from "../../data/products";
import Pagination from "../../components/Pagination";

function Products({ product }) {
  const context = useContext(MenuContext);
  console.log("render");

  return (
    <div className="flex mx-auto max-w-[1430px] lg:px-[30px]">
      <div className="pr-[30px] w-[300px] hidden lg:block">
        {/* <FilterProducts /> */}
      </div>
      <div className="flex flex-col lg:w-calc px-[30px] lg:px-0">
        <div class="flex my-3 justify-between sm:mx-5">
          <div class="lg:hidden ">
            <button
              // onClick={() => context.setFilter(!context.filter)}
              className="w-28 sm:w-36 min-w-full bg-red-600 py-2.5 px-2.5 text-white rounded focus:outline-none"
            >
              Filter
            </button>
            {/* <FilterProducts /> */}
          </div>
          <div class="ml-auto">
            <select class="pl-5 pr-5 md:pr-10 h-full lg:h-10 leading-10 bg-white border-2">
              <option value="">Default sorting</option>
              <option value="">Price low-high</option>
              <option value="">Price high-low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mb-7">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
        {/* paginator */}
        <Pagination page={3} pages={10} />
      </div>
    </div>
  );
}

export default Products;
