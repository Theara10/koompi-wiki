import { Row, Col, Anchor } from "antd";
import React from "react";
import { useRouteMatch } from "react-router-dom";

import data from "../data/data.json";

const { Link } = Anchor;

function SinglePage(props) {
  const match = useRouteMatch();
  const dataMenu = data.find((x) => x.id == match.params.menu);
  const dataContent = dataMenu.submenu.find((x) => x.id == match.params.id);

  console.log(dataContent);

  return (
    <div className="single-page-container">
      <Row gutter={[12, 12]}>
        <Col span={18}>
          <h2>Hello World</h2>
          <p>{dataContent.content}</p>
          {/* {dataCont.map((res) => {
            console.log(res.submenu);
            return (
              <div>
                {res.submenu.map((res) => {
                  return <p>{res.content}</p>;
                })}
              </div>
            );
          })} */}
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit fusce
            gravida, auctor mus tincidunt potenti vel eu ullamcorper nisl
            pharetra tempus, eget nisi facilisis torquent urna primis tortor
            vehicula. Congue ad molestie volutpat morbi nullam pretium dictum
            integer facilisi parturient, nisi turpis enim bibendum luctus donec
            litora gravida hac praesent maecenas, vestibulum aliquet lobortis
            felis condimentum tempor iaculis mauris aenean. Faucibus egestas
            suspendisse hac torquent tempus nullam vulputate sagittis elementum
            odio, dui etiam condimentum ornare penatibus duis integer curae
            purus, id litora dictum cursus nec praesent cras justo aenean.
          </p> */}
        </Col>
        <Col span={6}>
          <Anchor affix={false} style={{ marginLeft: 30 }}>
            <Link href="#components-anchor-demo-basic" title="Basic demo" />
            <Link href="#components-anchor-demo-static" title="Static demo" />
            <Link href="#API" title="API">
              <Link href="#Anchor-Props" title="Anchor Props" />
              <Link href="#Link-Props" title="Link Props" />
            </Link>
          </Anchor>
        </Col>
      </Row>
    </div>
  );
}

export default SinglePage;
