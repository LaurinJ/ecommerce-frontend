import React, { useState } from "react";

function LeftMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      class="
        lg:hidden
        fixed
        top-0
        left-0
        w-full
        h-full
        z-10
        bg-gray-200 bg-opacity-75
        visible
        opacity-100
      "
    >
      <div
        className={`relative w-80 h-full bg-white duration-300 ${showMenu ? "-left-80" : "left-0"}`}
      >
        <h5 class="py-3.5 text-white bg-red-600 text-xl text-center font-bold">
          Menu
          <svg
            onClick={() => setShowMenu(!showMenu)}
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
