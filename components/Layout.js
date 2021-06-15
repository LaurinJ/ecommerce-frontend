import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import BottonMenu from "./BottonMenu";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <BottonMenu />
      <LeftMenu />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
