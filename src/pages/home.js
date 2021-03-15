import { Row, Col } from "antd";
import React from "react";

function HomePage() {
  return (
    <div className="container">
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <img
            src="/images/docs.jpg"
            alt="koompi wiki docs"
            className="img-responsive"
          />
        </Col>
        <Col span={16}>
          <div className="welcome-doc">
            <h2 className="document-title">KOOMPI WIKI</h2>
            <p>
              This website is a one-stop platform that gathering the instruction
              installation, updating, FAQs, and problem-solving. You can learn
              more about the Linux commands and information. Besides, you can
              keep up with the latest releases for new features and environment
              as our teams are always trying their best to deliver the optimal
              user experience.
            </p>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col span={12}>
          <div className="document-category">
            <h2>Basic Commands</h2>
          </div>
        </Col>
        <Col span={12}>
          <div className="document-category">
            <h2>KOOMPI OS</h2>
          </div>
        </Col>
        <Col span={12}>
          <div className="document-category">
            <h2>Applications</h2>
          </div>
        </Col>
        <Col span={12}>
          <div className="document-category">
            <h2>FAQs</h2>
          </div>
        </Col>
        <Col span={12}>
          <div className="document-category">
            <h2>New Release</h2>
          </div>
        </Col>
        <Col span={12}>
          <div className="document-category">
            <h2>About</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
