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
            <div className="card-container">
              <img
                src="https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-documentfilepagepenresume-flat-color-icon-vector-png-image_1491048.jpg"
                width="50"
                height="50"
              />
              <div>
                <h4 className="card-title">{x.title}</h4>
                <p className="card-subtitle">{x.subtitle}</p>
                <p
                  style={{
                    paddingTop: 30,
                    paddingLeft: 15,
                    fontSize: 15,
                    color: "#37a8c7",
                  }}
                >
                  Read Now
                </p>
              </div>
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
    subtitle: "All available command in the open-source world",
  },
  {
    title: "Contribute",
    subtitle: "All available command in the open-source world",
  },
];
