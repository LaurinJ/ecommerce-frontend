import React from "react";

function LinksLeftMenu({ links }) {
  return (
    <nav class="flex flex-col text-md overflow-hidden">
      <ul class="flex flex-col my-2">
        {links.map((name, i) => {
          return (
            <li class="text-gray-700 hover:text-blue-700" key={i}>
              <a href="#" className="block py-2.5 pl-6 pr-4 border-b border-gray-200">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default LinksLeftMenu;
