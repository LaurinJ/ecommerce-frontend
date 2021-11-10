import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import BottonMenu from "./BottonMenu";
import MenuProvider from "../context/MenuProvider";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <MenuProvider>
        <BottonMenu />
        <LeftMenu />
      </MenuProvider>

      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
