import React from "react";
import { Link } from "react-router-dom";
import SubMenuComponent from "./SubMenuComponent";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import data from "../data/data.json";
import slugify from "slugify";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function Navbar() {
  return (
    <Sider width={300} className="site-layout-background">
      <h2 className="table-content">Table of Contents</h2>
      <Menu
        mode="inline"
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        // style={{ height: "100%", borderRight: 0 }}
      >
        {data.map((res) => {
          return (
            <SubMenu
              key={slugify(res.menu, {
                replacement: "-",
                lower: true,
              })}
              icon={<UserOutlined />}
              title={res.menu}
            >
              {res.submenu.map((x) => {
                return (
                  <Menu.Item
                    key={slugify(x.subTitle, {
                      replacement: "-",
                      lower: true,
                    })}
                  >
                    {/* <Link to={`${res.SubMenu}` + "/" + `${res.subTitle}`}> */}
                    <Link to={`/${res.id}/${x.id}`}>{x.subTitle}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
}

export default Navbar;
