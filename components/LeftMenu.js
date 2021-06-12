import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";

function LeftMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const context = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    context.setMenu(!context.leftMenu);
  };

  return (
    <div
      class={`
        lg:hidden
        fixed
        top-0
        left-0
        w-full
        h-full        
        ${context.leftMenu ? "z-10 bg-gray-200 bg-opacity-75" : "invisible"}
        opacity-100
      `}
    >
      <div
        className={`relative w-80 h-full bg-white duration-300 ${
          context.leftMenu ? "left-0" : "-left-80"
        }`}
      >
        <h5 class="py-3.5 text-white bg-red-600 text-xl text-center font-bold">
          Menu
          <svg
            onClick={(e) => handleClick(e)}
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-4 right-3.5 h-6 w-6 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </h5>
      </div>
    </div>
  );
}

export default LeftMenu;
