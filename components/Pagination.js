import React from "react";

function Pagination({ page, pages }) {
  const paginator = (p, ps) => {
    const pagesButton = [];
    for (let i = 1; i <= ps; i++) {
      if (p === i) {
        pagesButton.push(
          <a className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 bg-red-700">
            {i}
          </a>
        );
      } else {
        pagesButton.push(
          <a className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 hover:border-black duration-200 cursor-pointer">
            {i}
          </a>
        );
      }
    }
    return pagesButton;
  };

  return (
    <div className="mb-7 mx-auto font-bold sm:font-normal">
      {page > 1 ? (
        <a className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 hover:border-black duration-200 bg-red-700 cursor-pointer">
          &#60;
        </a>
      ) : (
        ""
      )}
      {paginator(page, pages)}
      {page < pages ? (
        <a className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 hover:border-black duration-200 bg-red-700 cursor-pointer">
          &#62;
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default Pagination;
