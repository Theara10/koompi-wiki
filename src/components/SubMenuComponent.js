import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function SubMenuComponent() {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["0"]}
      defaultOpenKeys={["0"]}
      mode="inline"
      style={{ backgroundColor: "#f1f2f6" }}
    >
      {MenuItems.map((item, index) => {
        return (
          <SubMenu key={index} className="submenu-title" title={item.title}>
            {item.menus.map((x, i) => {
              return (
                <Menu.Item
                  style={{ margin: 0 }}
                  className="menu-item"
                  key={index + "" + i}
                >
                  {x.text}
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
}

export default SubMenuComponent;

const MenuItems = [
  {
    title: "KOOMPI OS",
    menus: [
      {
        text: "Option 1",
      },
      {
        text: "Option 2",
      },
      {
        text: "Option 3",
      },
      {
        text: "Option 4",
      },
    ],
  },
  {
    title: "Basic Command",
    menus: [
      {
        text: "Option 1",
      },
      {
        text: "Option 2",
      },
      {
        text: "Option 3",
      },
      {
        text: "Option 4",
      },
    ],
  },
];
