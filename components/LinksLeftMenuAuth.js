import React from "react";
import Link from "next/link";
import { isAuth } from "../actions/auth";
import Logout from "./account/Logout";

function LinksLeftMenuAuth() {
  return (
    <>
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
          <li>
            <Logout class="block py-2.5 pl-6 pr-4 border-b border-gray-200" />
          </li>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <li>
            <Link href="/account/login">
              <a>Přihlásit</a>
            </Link>
          </li>
          <li>
            <Link href="/account/register">
              <a>Registrovat</a>
            </Link>
          </li>
        </React.Fragment>
      )}
    </>
  );
}

export default LinksLeftMenuAuth;
