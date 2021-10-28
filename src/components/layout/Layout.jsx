import React from "react";
import Navbar from "../organisms/navbar/Navbar";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
