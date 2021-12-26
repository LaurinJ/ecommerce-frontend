import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../data/categories";
import CartHeader from "../components/CartHeader";
import Search from "../components/Search";
import Logout from "../components/account/Logout";
import { isAuth } from "../actions/auth";

function Header() {
  return (
    <header className="mx-auto">
      <div className="bg-gray-100 hidden lg:block">
        <nav className="flex max-w-[1600px] mx-auto text-xs overflow-hidden">
          <ul className="flex  flex-none ml-20 my-2">
            <li className="px-2 hover:text-blue-700">
              <Link href="/">
                <a>Home</a>
              </Link>
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
            {isAuth() ? (
              <React.Fragment>
                <li className="px-2 hover:text-blue-700">
                  <Link href="/account/">
                    <a>{isAuth().name}</a>
                  </Link>
                </li>
                /
                <li className="px-2 hover:text-blue-700">
                  <Logout />
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="px-2 hover:text-blue-700">
                  <Link href="/account/login">
                    <a>Přihlásit</a>
                  </Link>
                </li>
                /
                <li className="px-2 hover:text-blue-700">
                  <Link href="/account/register">
                    <a>Registrovat</a>
                  </Link>
                </li>
              </React.Fragment>
            )}
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
        <Search />

        <CartHeader />
      </div>

      {/* categorie */}
      <div className="bg-gray-800 hidden lg:block">
        <nav className="max-w-[1600px] mx-auto text-white">
          <ul className="px-5 font-bold flex flex-wrap lg:px-16 ">
            {categories.map((cat, i) => {
              return (
                <li key={i} className="p-5 hover:bg-blue-500">
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
      <div className="bg-gray-100 text-gray-500 text-sm shadow-lg">
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
            <Link href="/products">
              <a>Slevy / produkt</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
