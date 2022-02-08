import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import { useLazyQuery } from "@apollo/client";
import { SEARCH } from "../queries/Query";

function Search() {
  const ref = useRef();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [searchFunc, { data }] = useLazyQuery(SEARCH, {
    fetchPolicy: "no-catch",
    variables: { params: { title: search.trim() } },
  });

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      setOpen(true);
      setSearch(value);
      searchFunc({ variables: { params: { title: value.trim() } } });
      console.log(value);
    } else {
      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/products?q=${search}`);
  };

  const keyPress = useCallback(
    (e) => {
      console.log(e);
      if (e.target.classList[0] === "search" && open) {
        setTimeout(() => {
          setOpen(false);
        }, 200);
        console.log("I pressed");
      }
    },
    [setOpen, open]
  );

  useEffect(() => {
    document.addEventListener("focusout", keyPress);
    return () => document.removeEventListener("focusout", keyPress);
  }, [keyPress]);

  return (
    <form className="hidden relative lg:flex" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search p-4 rounded-l-sm lg:text-lg max-h-14 bg-gray-100 w-96 outline-none border border-gray-400"
        placeholder="Vyhledat..."
        onChange={handleChange}
        onClick={(e) => {
          if (e.target.value.length > 2) {
            setOpen(true);
          }
        }}
      />
      <button
        type="submit"
        className="px-5 search rounded-r-sm bg-red-700 focus:outline-none hover:bg-red-500"
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
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <nav
        className={` ${
          open ? "block" : "hidden"
        } absolute top-full w-full border border-t-0 border-gray-400 bg-white z-20`}
      >
        <ul className="pb-2 link h-60 overflow-hidden overflow-y-auto n_scroll">
          {data && data.getFilterProducts.products.length ? (
            data.getFilterProducts.products.map((product, i) => {
              return (
                <li key={i} className="link">
                  <Link href={`/products/${product.slug}`}>
                    <a
                      onClick={() => {
                        setOpen(false);
                        // setTimeout(() => {
                        //   setOpen(true);
                        //   console.log("time");
                        // }, 10000);
                      }}
                      className="link block mx-2 lg:py-2 lg:px-4 lg:text-lg hover:text-white hover:bg-primary cursor-pointer"
                    >
                      {product.title}
                    </a>
                  </Link>
                </li>
              );
            })
          ) : (
            <li>
              <span className="block mx-2 lg:py-2 lg:px-4 lg:text-lg text-gray-500">
                Nebylo nic nalezeno
              </span>
            </li>
          )}
        </ul>
      </nav>
    </form>
  );
}

export default Search;
