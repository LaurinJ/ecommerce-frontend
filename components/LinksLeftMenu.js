import React from "react";
import Link from "next/link";

function LinksLeftMenu({ links }) {
  return (
    <nav className="flex flex-col text-md overflow-hidden">
      <ul className="flex flex-col my-2">
        {links.map((item, i) => {
          return (
            <li className="text-gray-700 hover:text-blue-700" key={i}>
              <Link href={`/${item.slug}`}>
                <a className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                  {item.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default LinksLeftMenu;
