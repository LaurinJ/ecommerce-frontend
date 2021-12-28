import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import BottonMenu from "./BottonMenu";
import Chat from "./Chat";
import MenuProvider from "../context/MenuProvider";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <MenuProvider>
        <BottonMenu />
        <LeftMenu />
      </MenuProvider>

      <Chat />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
