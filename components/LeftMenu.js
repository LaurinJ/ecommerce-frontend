import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import MenuContext from "../context/MenuContext";
import LinksLeftMenu from "./LinksLeftMenu";
import Cart from "./Cart";
import { links } from "../data/links";
import { GET_CATEGORIES } from "../queries/Query";

function LeftMenu() {
  const context = useContext(MenuContext);

  const { data } = useQuery(GET_CATEGORIES);

  const handleClick = () => {
    context.setMenu((prevState) => ({
      ...prevState,
      state: !context.leftMenu.state,
    }));
  };

  return (
    <div
      className={`
        lg:hidden
        fixed
        top-0
        left-0
        w-full
        h-full 
        z-10       
        ${
          context.leftMenu.state
            ? "bg-gray-200 bg-opacity-75 duration-500"
            : "invisible"
        }
        opacity-100
      `}
    >
      <div
        className={`relative w-80 h-full bg-white duration-300 ${
          context.leftMenu.state ? "left-0" : "-left-80"
        }`}
      >
        <h5 className="mobile-menu-title">
          {context.leftMenu.type}
          <svg
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 right-3.5 h-6 w-6 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </h5>
        {(() => {
          switch (context.leftMenu.type) {
            case "Menu":
              return <LinksLeftMenu links={links} auth={true} />;
            case "Kategorie":
              return <LinksLeftMenu links={data && data.getCategories} />;
            case "Košík":
              return <Cart />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default LeftMenu;
