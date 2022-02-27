import React, { useState } from "react";
import { useRouter } from "next/router";
import PriceRangeInput from "./form/PriceRangeInput";

function FilterProducts() {
  const [open, setOpen] = useState(false);
  const [filterParams, setFilterParams] = useState({
    min_price: 1000,
    max_price: 7000,
  });
  const router = useRouter();

  const filter = () => {
    const pathname = router.asPath.split("?")
      ? router.asPath.split("?")[0]
      : router.asPath;
    const q = {
      ...router.query,
    };
    delete q.slug;

    router.push(
      {
        pathname: pathname,
        query: { ...q, ...filterParams },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-28 sm:w-36 min-w-full bg-primary py-2.5 px-2.5 text-white rounded focus:outline-none"
      >
        Filter
      </button>
      {/* Mobile filter products */}
      <div className={`relative ${open ? "z-10 " : "hidden"}`}>
        <div className="filter_box">
          <div className="mr-2 pt-2" onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-auto text-red-600 lg:hidden"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <aside className="w-full lg:pt-1 -mt-9 lg:mt-0">
            {/* <h3 className="py-3 px-5 bg-blue-500 text-white font-bold">Filtr</h3> */}
            {/* <div className="mx-4 my-4"> */}
            {/* </div> */}
            <PriceRangeInput setFilterParams={setFilterParams} />
            <hr />
            <div className="mx-4 my-4">
              <button
                className="base_btn_form_primary inline-block mb-4 w-full mx-auto"
                onClick={filter}
              >
                Hledat
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
