import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function BottonMenu() {
  const context = useContext(AppContext);
  console.log(context);

  const handleClick = (e) => {
    e.preventDefault();
    context.setMenu(!context.leftMenu);
  };

  return (
    <div
      class="
        w-full
        py-3
        fixed
        z-20
        left-0
        bottom-0
        lg:hidden
        bg-white
        border-t border-gray-300
        text-gray-700
      "
    >
      <div class="flex justify-evenly">
        <a href="#" onClick={(e) => handleClick(e)} class="relative ml-5 text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <span>Menu</span>
        </a>
        <a href="#" onClick={(e) => handleClick(e)} class="relative ml-5 text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <span>Kategorie</span>
        </a>
        <a href="#" onClick={(e) => console.log("search")} class="relative ml-5 text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <span>Search</span>
        </a>
        <a href="#" onClick={(e) => handleClick(e)} class="relative ml-5 text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <span>Košík</span>
          <span class="absolute -right-2 -top-2 bg-red-600 w-5 h-5 rounded-full text-white">9</span>
        </a>
      </div>
    </div>
  );
}

export default BottonMenu;
