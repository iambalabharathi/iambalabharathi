import React from "react";

import AppLogo from "../images/logo.png";

export default function Layout({ children }) {
  return (
    <div className="app">
      <div className="navbar">
        <div id="logo-wrapper">
          <img id="app-logo" src={AppLogo}></img>
        </div>
      </div>
      {children}
    </div>
  );
}
