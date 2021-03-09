import React from "react";
import { Anchor } from "antd";

import { DownOutlined, GithubOutlined } from "@ant-design/icons";
const { Link } = Anchor;

const img = require("../lib/img/github_logo.png");

function Preview() {
  return (
    <div className="preview">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="select-lang">
          <p>KH</p>
          <DownOutlined style={{ fontSize: 10 }} />
        </div>
        <div style={{ marginLeft: 20, display: "flex" }}>
          <GithubOutlined style={{ fontSize: 25 }} />
          <div
            style={{
              height: 25,
              width: 60,
              border: "1px solid #262e3c",
              borderRadius: 3,
              marginLeft: 5,
            }}
          >
            <p style={{ textAlign: "center" }}>Github</p>
          </div>
        </div>
      </div>

      <Anchor className="anchor">
        <Link href="#page1" title="Welcome" />
        <Link href="#page2" title="Install" />
        <Link href="#page3" title="Uninstall Applications" />
        <Link href="#page4" title="Open Konsole" />
      </Anchor>
    </div>
  );
}

export default Preview;
