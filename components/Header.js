import React, { useState } from "react";
import Link from "next/link";
import { categories } from "../data/categories";
import Cart from "../components/Cart";
import { cart } from "../data/cart";

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <React.Fragment>
      <nav class="flex bg-gray-100 text-xs overflow-hidden">
        <ul class="flex flex-none ml-20 my-2">
          <li class="px-2 hover:text-blue-700">
            <a href="#">Home</a>
          </li>
          |
          <li class="px-2 hover:text-blue-700">
            <a href="#">Jak nakupovat</a>
          </li>
          |
          <li class="px-2 hover:text-blue-700">
            <a href="#">Obchodní podmínky</a>
          </li>
          |
          <li class="px-2 hover:text-blue-700">
            <a href="#">Kontaktujte nás</a>
          </li>
        </ul>
        <ul class="flex ml-auto my-2 mr-20">
          <li class="px-2 hover:text-blue-700">
            <a href="#">Přihlásit</a>
          </li>
          /
          <li class="px-2 hover:text-blue-700">
            <a href="#">Registrovat</a>
          </li>
        </ul>
      </nav>

      <header class="flex flex-col space-y-5 md:flex-row my-5 items-center md:justify-around">
        <img class="-ml-10" src="https://www.apollos.cz/images/logo_apollos.png"></img>

        <div class="flex">
          <input
            type="search"
            class="p-4 rounded-l-sm bg-gray-100 focus:outline-none"
            placeholder="Vyhledat"
          />
          <button
            type="button"
            class="px-5 rounded-r-sm bg-blue-400 focus:outline-none hover:bg-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
          </button>
        </div>
        <div className="relative">
          <button type="button" class="py-10 px-3 flex items-center space-x-5 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
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
            <span class="">0 ks - 0 Kč</span>
          </button>
          <div class="w-64 hover:block absolute rounded-b-lg z-10 bg-gray-300">
            <Cart cart={cart} />
          </div>
        </div>
      </header>

      <div class="bg-gray-800 text-gray-100 flex justify-between sm:hidden">
        <span class="p-4 pl-10 text-white font-bold">Kategorie</span>

        <button class="mr-5 px-4 py-2 focus:outline-none focus:bg-gray-700">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
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
        </button>
      </div>

      {/* categorie */}
      <div
        class="bg-blue-800 text-blue-100 w-full transform md:relative md:translate-y-0
     transition duration-200 ease-in-out"
      >
        <nav class="bg-gray-800 text-white border-t border-white">
          <ul class="px-5 font-bold sm:flex sm:flex-wrap sm:flex-none md:px-16">
            {categories.map((cat, i) => {
              return (
                <li key={i} class="p-5 hover:bg-blue-500">
                  <a href="#">{cat}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* aktualni pozice */}
      <div class="bg-gray-100 text-gray-500 text-sm">
        <ul class="flex p-3 px-20 -ml-2">
          <li class="px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </li>
          /<li class="px-3">Zboží</li>/<li class="px-3">Slevy</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
