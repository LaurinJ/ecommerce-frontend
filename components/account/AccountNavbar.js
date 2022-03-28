import React, { useState } from "react";
import Link from "next/link";
import Logout from "./Logout";

function AccountNavbar() {
  const [myShop, setMyShop] = useState(false);
  const [myContent, setMyContent] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <div className="bg-lg_blue w-full lg:w-1/5">
      {/* navbar */}
      <h3
        className="flex justify-between items-center bg-blue-200 text-lg p-[10px] cursor-pointer"
        onClick={() => setMyShop(!myShop)}
      >
        Moje nákupy{" "}
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
            strokeWidth={2}
            d={myShop ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </h3>
      <ul className={myShop ? "" : "hidden"}>
        <li>
          <Link href="/account/">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Objednávky
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Faktury
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Kupóny
            </a>
          </Link>
        </li>
      </ul>
      {/* my */}
      <h3
        className="flex justify-between items-center bg-blue-200 text-lg p-[10px] cursor-pointer"
        onClick={() => setMyContent(!myContent)}
      >
        Můj obsah{" "}
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
            strokeWidth={2}
            d={myContent ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </h3>
      <ul className={myContent ? "" : "hidden"}>
        <li>
          <Link href="">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Oblíbené produkty
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Seznamy
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Recenze
            </a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Hlídání cen a novinek
            </a>
          </Link>
        </li>
      </ul>
      {/* setting */}
      <h3
        className="flex justify-between items-center bg-blue-200 text-lg p-[10px] cursor-pointer"
        onClick={() => setSetting(!setting)}
      >
        Nastavení{" "}
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
            strokeWidth={2}
            d={setting ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </h3>
      <ul className={setting ? "" : "hidden"}>
        <li>
          <Link href="/account/userdata">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Registrační údaje
            </a>
          </Link>
        </li>
        <li>
          <Link href="/account/changepassword">
            <a className="py-[10px] pl-5 pr-10 border-b border-gray-300 block">
              Změna hesla
            </a>
          </Link>
        </li>
        <li>
          <Logout class="w-full py-[10px] pl-5 pr-10 border-b border-gray-300 block" />
        </li>
      </ul>
    </div>
  );
}

export default AccountNavbar;
