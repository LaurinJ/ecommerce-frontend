import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import ProductCard from "../../components/ProductCard1";
import FilterProducts from "../../components/FilterProducts";
import { products } from "../../data/products";

function Products({ product }) {
  const context = useContext(AppContext);
  return (
    <div className="flex mx-auto max-w-[1430px]">
      <div className="pr-[30px] w-[300px] hidden md:block">
        <div className="w-full h-full bg-gray-300">
          {/* <FilterProducts /> */}
        </div>
      </div>
      <div className="flex flex-col md:w-calc px-[30px] md:px-0">
        <div class="flex space-x-3">
          <div class="lg:hidden">
            <button
              onClick={() => context.setFilter(!context.filter)}
              className="w-36 min-w-full bg-red-600 py-2.5 px-2.5 text-white rounded focus:outline-none"
            >
              Filter
            </button>
          </div>
          <div class="ml-auto">
            <select class="pl-5 pr-5 md:pr-10 h-full lg:h-10 leading-10 bg-white border-2">
              <option value="">Default sorting</option>
              <option value="">Price low-high</option>
              <option value="">Price high-low</option>
            </select>
          </div>
        </div>
        <div className="flex-grow grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </div>

    // <div class="container mx-auto my-10 px-3">
    //   <div class="flex flex-wrap">
    //     <FilterProducts />
    //     <div class="w-full xl:w-3/4 lg:w-2/3 px-3">
    // <div class="flex space-x-3">
    //   <div class="lg:hidden">
    //     <button
    //       onClick={() => context.setFilter(!context.filter)}
    //       className="w-36 min-w-full bg-red-600 py-2.5 px-2.5 text-white rounded focus:outline-none"
    //     >
    //       Filter
    //     </button>
    //   </div>
    //   <div class="ml-auto">
    //     <select class="pl-5 pr-5 md:pr-10 h-full lg:h-10 leading-10 bg-white border-2">
    //       <option value="">Default sorting</option>
    //       <option value="">Price low-high</option>
    //       <option value="">Price high-low</option>
    //     </select>
    //   </div>
    // </div>
    //       <main>
    //         <div class="flex flex-wrap mt-10">
    //           {products.map((product, i) => {
    //             return <ProductCard product={product} />;
    //           })}
    //         </div>
    //       </main>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Products;
