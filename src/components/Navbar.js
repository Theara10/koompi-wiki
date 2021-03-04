import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import SubMenuComponent from "./SubMenuComponent";

const img = require("../lib/img/logo.png");

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div to="/" className="logo">
            <img src={img.default} width="30" height="30" />
            <h2>KOOMPI WIKI</h2>
          </div>
        </div>
        <a>
          <h3>
            <Link to="/introduction">Introduction</Link>{" "}
          </h3>
        </a>
        <SubMenuComponent />
      </div>
    </div>
  );
}

export default Navbar;
