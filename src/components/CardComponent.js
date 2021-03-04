import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";

const { Meta } = Card;
const img = require("../lib/img/logo.png");
function CardComponent() {
  return (
    <div style={{ display: "flex" }}>
      {data.map((x) => {
        return (
          <div className="card">
            <img src={img.default} width="40" height="40" />
            <div>
              <h4 className="card-title">{x.title}</h4>
              <p className="card-subtitle">{x.subtitle}</p>
            </div>
          </div>
          // <Card style={{ width: 300, marginTop: 16 }}>
          //   <Meta
          //     avatar={
          //       <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          //     }
          //     title={x.title}
          //     description={x.subtitle}
          //     size="big"
          //   />
          // </Card>
        );
      })}
    </div>
  );
}

export default CardComponent;

const data = [
  {
    title: "KOOMPI OS",
    subtitle: "All available command in the open-source world",
  },
  {
    title: "KOOMPI OS",
    subtitle: "All available command in the open-source world",
  },
  // {
  //   title: "KOOMPI OS",
  //   subtitle: "This is subtitle",
  // },
  // {
  //   title: "KOOMPI OS",
  //   subtitle: "This is subtitle",
  // },
];
