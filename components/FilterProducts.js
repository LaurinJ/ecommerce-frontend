import React, { useState } from "react";
import { useRouter } from "next/router";
import PriceRangeInput from "./form/PriceRangeInput";

function FilterProducts({ getProductsFunc, category }) {
  const [filterParams, setFilterParams] = useState({});
  const router = useRouter();
  console.log(filterParams);
  return (
    <div className="bg-gray-100">
      <div className="shadow-2xl">
        <aside className="w-full lg:pt-1 -mt-9 lg:mt-0">
          {/* <h3 className="py-3 px-5 bg-blue-500 text-white font-bold">Filtr</h3> */}
          {/* <div className="mx-4 my-4"> */}
          {/* </div> */}
          <PriceRangeInput setFilterParams={setFilterParams} />
          <hr />
          <div className="mx-4 my-4">
            <button
              className="base_btn_form_primary inline-block mb-4 w-full mx-auto"
              onClick={() => {
                // console.log(filter);
                getProductsFunc({
                  variables: {
                    params: {
                      category: category,
                      ...filterParams,
                    },
                  },
                });
                console.log("sent");
              }}
            >
              {/* <button className="block mx-auto my-4 py-2 px-4 bg-primary text-sm font-bold text-white"> */}
              Hledat
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default FilterProducts;
