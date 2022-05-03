import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import BottomMenu from "./BottomMenu";
import ChatWrapper from "./ChatWrapper";
import MenuProvider from "../context/MenuProvider";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <MenuProvider>
        <BottomMenu />
        <LeftMenu />
      </MenuProvider>

      <ChatWrapper />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
