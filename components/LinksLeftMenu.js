import React from "react";
import Link from "next/link";
import { isAuth } from "../actions/auth";
import Logout from "./account/Logout";
import LinksLeftMenuAuth from "./LinksLeftMenuAuth";

function LinksLeftMenu({ links, auth }) {
  return (
    <nav className="mobile-links">
      <ul>
        {links.map((item, i) => {
          return (
            <li key={i}>
              <Link href={`/${item.slug}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          );
        })}
        {auth && <LinksLeftMenuAuth />}
      </ul>
    </nav>
  );
}

export default LinksLeftMenu;
