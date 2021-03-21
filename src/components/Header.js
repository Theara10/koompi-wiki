import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Input, Space, Menu } from "antd";
import SearchBox from "./SearchBox";

// const { Search } = Input;
const { Header } = Layout;

function TopNav() {
  return (
    <Header className="header">
      <Link to="/">
        <img
          src="/Koompi-White.png"
          width="auto"
          height="50"
          className="logo"
        />
      </Link>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" className="header-menu-item">
          <Input
            placeholder="Search"
            style={{
              width: 400,
              backgroundColor: "#2f3640",
              borderRadius: 5,
              border: "none",
            }}
          />
        </Menu.Item>
        <Menu.Item key="2" className="header-menu-item">
          Community
        </Menu.Item>
        <Menu.Item key="3" className="header-menu-item">
          Github
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default TopNav;
