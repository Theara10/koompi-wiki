import React from "react";
import { Skeleton, Switch, Card, Avatar, Row, Col } from "antd";

const { Meta } = Card;
const img = require("../lib/img/logo.png");
function CardComponent() {
  return (
    <Row>
      {data.map((x) => {
        return (
          <Col span={11} className="card">
            {/* <img src={img.default} width="40" height="40" /> */}
            <div>
              <h4 className="card-title">{x.title}</h4>
              <p className="card-subtitle">{x.subtitle}</p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default CardComponent;

const data = [
  {
    title: "Read Documents",
    subtitle: "All available command in the open-source world",
  },
  {
    title: "Watch Tutorials",
    subtitle: "All available command in the open-source world",
  },
  {
    title: "Join Community",
    subtitle: "This is subtitle",
  },
  {
    title: "Contribute",
    subtitle: "This is subtitle",
  },
];
