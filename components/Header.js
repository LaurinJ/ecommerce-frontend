import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import CartHeader from "../components/CartHeader";
import Search from "../components/Search";
import Logout from "../components/account/Logout";
import { isAuth } from "../actions/auth";
import { GET_CATEGORIES } from "../queries/Query";
import PositionCard from "./PositionCard";

function Header() {
  const { data } = useQuery(GET_CATEGORIES);

  return (
    <header className="mx-auto relative">
      <div className="bg-gray-100 hidden lg:block">
        <nav className="header_link">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            |
            <li>
              <Link href="/info">
                <a>Jak nakupovat</a>
              </Link>
            </li>
            |
            <li>
              <Link href="/info">
                <a>Obchodní podmínky</a>
              </Link>
            </li>
            |
            <li>
              <Link href="/contact">
                <a>Kontaktujte nás</a>
              </Link>
            </li>
          </ul>
          <ul>
            {isAuth() ? (
              <React.Fragment>
                {isAuth().role && (
                  <li>
                    <a href="http://localhost:3001/">Dashboard</a>
                  </li>
                )}
                <li>
                  <Link href="/account/">
                    <a>{isAuth().name}</a>
                  </Link>
                </li>
                /
                <li>
                  <Logout />
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li>
                  <Link href="/account/login">
                    <a>Přihlásit</a>
                  </Link>
                </li>
                /
                <li>
                  <Link href="/account/register">
                    <a>Registrovat</a>
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </div>

      <div className="header-wrapper">
        <Image
          className="-ml-10 border-8"
          width="280"
          height="100"
          src="/bigbuy.jpg"
        ></Image>
        <Search />

        <CartHeader />
      </div>

      {/* categories */}
      <div className="nav-bar">
        <nav>
          <ul>
            {data &&
              data.getCategories.map((category, i) => {
                return (
                  <li key={i}>
                    <Link href={`/${category.slug}`}>
                      <a>{category.name}</a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>

      {/* <PositionCard /> */}
    </header>
  );
}

export default Header;
