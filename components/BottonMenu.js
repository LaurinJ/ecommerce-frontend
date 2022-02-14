import React, { useState, useContext } from "react";
import MenuContext from "../context/MenuContext";
import CartContext from "../context/CartContext";
import Modal from "./Modal";
import SearchModal from "./SearchModal";

function BottonMenu() {
  const context = useContext(MenuContext);
  const [searchModal, setSearchModal] = useState(true);
  const { itemCount } = useContext(CartContext);

  const handleClick = (name) => {
    context.setMenu({ state: !context.leftMenu.state, type: name });
  };

  const closeMenu = () => {
    context.setMenu({ state: false });
  };

  return (
    <>
      <div className="fixed left-2/4 top-1/4 z-30">
        <Modal showModal={searchModal} setShowModal={setSearchModal}>
          <SearchModal />
        </Modal>
      </div>
      <div
        className="
        w-full
        py-3
        fixed
        z-20
        left-0
        bottom-0
        lg:hidden
        bg-white
        border-t border-gray-300
        text-gray-700
      "
      >
        <div className="flex justify-evenly">
          <a
            href="#"
            onClick={() => handleClick("Menu")}
            className="relative ml-5 text-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
            <span>Menu</span>
          </a>
          <a
            href="#"
            onClick={() => handleClick("Kategorie")}
            className="relative ml-5 text-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
            <span>Kategorie</span>
          </a>
          <a
            href="#"
            onClick={() => {
              closeMenu();
              setSearchModal(!searchModal);
            }}
            className="relative ml-5 text-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <span>Search</span>
          </a>
          <a
            href="#"
            onClick={() => handleClick("Košík")}
            className="relative ml-5 text-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span>Košík</span>
            <span className="absolute -right-2 -top-2 flex justify-center items-center bg-red-600 w-5 h-5 rounded-full text-white">
              {itemCount}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default BottonMenu;
