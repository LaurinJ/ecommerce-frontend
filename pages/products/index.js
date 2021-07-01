import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import ProductCard from "../../components/ProductCard";
import FilterProducts from "../../components/FilterProducts";
import { products } from "../../data/products";

function Products({ product }) {
  const context = useContext(AppContext);
  return (
    <div class="container mx-auto my-10 px-3">
      <div class="flex flex-wrap">
        <FilterProducts />
        <div class="w-full xl:w-3/4 lg:w-2/3 px-3">
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
          <main>
            <div class="flex flex-wrap mt-10">
              {products.map((product, i) => {
                return <ProductCard product={product} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Products;
