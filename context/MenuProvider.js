import React, { useState } from "react";
import MenuContext from "./MenuContext";

function MenuProvider({ children }) {
  const [leftMenu, setLeftMenu] = useState({ state: false, type: "Menu" });
  return (
    <MenuContext.Provider
      value={{
        leftMenu: leftMenu,
        setMenu: setLeftMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;
