import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import SubMenuComponent from "./SubMenuComponent";

const img = require("../lib/img/Koompi-White.png");

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={img.default} width="auto" height="40" />

          <h3 className="logo-text">Wiki</h3>
        </Link>
        <a>
          <h3>
            <Link to="/introduction">Welcome</Link>{" "}
          </h3>
        </a>
        <SubMenuComponent />
      </div>
    </div>
  );
}

export default Navbar;
