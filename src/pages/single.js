import { Row, Col, Anchor } from "antd";
import React from "react";
const { Link } = Anchor;

function SinglePage() {
  return (
    <div className="container">
      <Row gutter={[12, 12]}>
        <Col span={18}>
          <h2>Hello World</h2>
          <p>
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
          </p>
        </Col>
        <Col span={6}>
          <Anchor affix={false}>
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
