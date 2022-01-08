import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import BottonMenu from "./BottonMenu";
import ChatWrapper from "./ChatWrapper";
import MenuProvider from "../context/MenuProvider";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <MenuProvider>
        <BottonMenu />
        <LeftMenu />
      </MenuProvider>

      <ChatWrapper />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
