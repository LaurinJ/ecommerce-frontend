import React from "react";
import Link from "next/link";

function Pagination({ page = 1, pages, refetch }) {
  const paginator = (p, ps) => {
    const pagesButton = [];
    for (let i = 1; i <= ps; i++) {
      if (p === i) {
        pagesButton.push(
          <a
            key={i}
            className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 bg-red-700"
          >
            {i}
          </a>
        );
      } else {
        pagesButton.push(
          <Link href={`/products?page=${i}`} key={i}>
            <a
              key={i}
              className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 hover:border-black duration-200 cursor-pointer"
            >
              {i}
            </a>
          </Link>
        );
      }
    }
    return pagesButton;
  };

  return (
    <div className="mb-7 mx-auto font-bold sm:font-normal">
      {page > 1 ? (
        <Link href={`/products?page=${page - 1}`} key="40">
          <a
            key="40"
            className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 hover:border-black duration-200 bg-red-700 cursor-pointer"
          >
            &#60;
          </a>
        </Link>
      ) : (
        ""
      )}
      {paginator(page, pages)}
      {page < pages ? (
        <Link href={`/products?page=${page + 1}`} key="41">
          <a
            key="41"
            className="w-[35px] mr-2 leading-8 text-center border inline-block border-gray-300 hover:border-black duration-200 bg-red-700 cursor-pointer"
          >
            &#62;
          </a>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default Pagination;
