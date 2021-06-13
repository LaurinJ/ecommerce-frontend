import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import LinksLeftMenu from "./LinksLeftMenu";
import Cart from "./Cart";
import { links } from "../data/links";
import { categories } from "../data/categories";
import { cart } from "../data/cart";

function LeftMenu() {
  const context = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    context.setMenu((prevState) => ({
      ...prevState,
      state: !context.leftMenu.state,
    }));
  };

  return (
    <div
      class={`
        lg:hidden
        fixed
        top-0
        left-0
        w-full
        h-full        
        ${context.leftMenu.state ? "z-10 bg-gray-200 bg-opacity-75 duration-500" : "invisible"}
        opacity-100
      `}
    >
      <div
        className={`relative w-80 h-full bg-white duration-300 ${
          context.leftMenu.state ? "left-0" : "-left-80"
        }`}
      >
        <h5 class="py-3.5 text-white bg-red-600 text-xl text-center font-bold">
          {context.leftMenu.type}
          <svg
            onClick={(e) => handleClick(e)}
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-4 right-3.5 h-6 w-6 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </h5>

        {context.leftMenu.type === "Menu" ? (
          <LinksLeftMenu links={links} />
        ) : context.leftMenu.type === "Kategorie" ? (
          <LinksLeftMenu links={categories} />
        ) : (
          <Cart cart={cart} />
        )}
        {/* <LinksLeftMenu links={links} /> */}

        {/* <nav class="flex flex-col text-md overflow-hidden">
          <ul class="flex flex-col my-2">
            <li class="text-gray-700 hover:text-blue-700">
              <a href="#" className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                Home
              </a>
            </li>

            <li class="text-gray-700 hover:text-blue-700">
              <a href="#" className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                Jak nakupovat
              </a>
            </li>

            <li class="text-gray-700 hover:text-blue-700">
              <a href="#" className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                Obchodní podmínky
              </a>
            </li>

            <li class="text-gray-700 hover:text-blue-700">
              <a href="#" className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                Kontaktujte nás
              </a>
            </li>
            <li class="text-gray-700 hover:text-blue-700">
              <a href="#" className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                Přihlásit
              </a>
            </li>

            <li class="text-gray-700 hover:text-blue-700">
              <a href="#" className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                Registrovat
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}

export default LeftMenu;
