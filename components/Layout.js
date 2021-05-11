import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <h1>Layout</h1>
      {children}
      {/* <>footer</> */}
    </React.Fragment>
  );
};

export default Layout;
