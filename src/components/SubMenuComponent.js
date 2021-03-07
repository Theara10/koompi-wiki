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
      itemIcon="white"
    >
      {data.map((item, index) => {
        return (
          <SubMenu key={index} title={item.title}>
            {item.menus.map((x, i) => {
              return (
                <Menu.Item
                  className="menu-item"
                  style={{ margin: 0 }}
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

const data = [
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
    title: "Applications",
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
    title: "Instruction Manuals",
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
    title: "New Release",
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
