import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../data/categories";
import Cart from "../components/Cart";
import { cart } from "../data/cart";

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <header className="mx-auto">
      <div className="bg-gray-100 hidden lg:block">
        <nav className="flex max-w-[1600px] mx-auto text-xs overflow-hidden">
          <ul className="flex  flex-none ml-20 my-2">
            <li className="px-2 hover:text-blue-700">
              <a href="#">Home</a>
            </li>
            |
            <li className="px-2 hover:text-blue-700">
              <a href="#">Jak nakupovat</a>
            </li>
            |
            <li className="px-2 hover:text-blue-700">
              <a href="#">Obchodní podmínky</a>
            </li>
            |
            <li className="px-2 hover:text-blue-700">
              <a href="#">Kontaktujte nás</a>
            </li>
          </ul>
          <ul className="flex ml-auto my-2 mr-20 ">
            <li className="px-2 hover:text-blue-700">
              <a href="#">Přihlásit</a>
            </li>
            /
            <li className="px-2 hover:text-blue-700">
              <a href="#">Registrovat</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col max-w-[1600px] mx-auto space-y-5 md:flex-row my-5 items-center md:justify-around">
        <Image
          className="-ml-10 border-8"
          width="200"
          height="70"
          src="https://www.apollos.cz/images/logo_apollos.png"
        ></Image>

        <div className="hidden lg:flex">
          <input
            type="search"
            className="p-4 rounded-l-md bg-gray-100 w-72"
            placeholder="Vyhledat..."
          />
          <button
            type="button"
            className="px-5 rounded-r-md bg-blue-400 focus:outline-none hover:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        <div className="hidden lg:block cart-h">
          <button
            type="button"
            className="py-10 px-3 flex items-center space-x-5 text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
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
            <span className="">0 ks - 0 Kč</span>
          </button>
          <div className="lg-cart w-64 hidden d-block absolute rounded-b-lg z-20 bg-gray-300">
            <Cart cart={cart} />
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-800 text-gray-100 flex justify-between sm:hidden">
        <span className="p-4 pl-10 text-white font-bold">Kategorie</span>

        <button className="mr-5 px-4 py-2 focus:outline-none focus:bg-gray-700">
          <svg
            className="h-5 w-5"
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
      </div> */}

      {/* categorie */}
      <div className="bg-gray-800 hidden lg:block">
        <nav className="max-w-[1600px] mx-auto text-white">
          <ul className="px-5 font-bold flex flex-wrap lg:px-16 ">
            {categories.map((cat, i) => {
              return (
                <li key={i} class="p-5 hover:bg-blue-500">
                  <Link href="/products">
                    <a>{cat}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* aktualni pozice */}
      <div className="bg-gray-100 text-gray-500 text-sm">
        <ul className="max-w-[1600px] mx-auto flex py-3 px-[40px] lg:px-[70px]">
          <li className="px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </li>
          /<li className="px-3 ">Zboží</li>/
          <li className="px-3">
            <Link href="products/1">
              <a>Slevy / produkt</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
