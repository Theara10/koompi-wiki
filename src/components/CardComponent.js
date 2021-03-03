import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";

const { Meta } = Card;

function CardComponent() {
  return (
    <div style={{ display: "flex" }}>
      {data.map((x) => {
        return (
          <div className="card">
            <div>
              <h3>{x.title}</h3>
              <p>{x.subtitle}</p>
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
    subtitle: "This is subtitle",
  },
  {
    title: "KOOMPI OS",
    subtitle: "This is subtitle",
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
