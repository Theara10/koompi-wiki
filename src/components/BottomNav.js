import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

function BottomNav() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="box-container">
        <div className="box">
          <ArrowLeftOutlined />
        </div>
        <div className="box-text-left">
          <p style={{ color: "#37a8c7", fontSize: 10 }}>PREVIOUS</p>
          <p>Quick Start</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box-text-right">
          <p style={{ color: "#37a8c7", fontSize: 10 }}>NEXT</p>
          <p>Update Software</p>
        </div>
        <div className="box">
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
