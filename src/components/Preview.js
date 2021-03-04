import React from "react";
import { Anchor } from "antd";
const { Link } = Anchor;

function Preview() {
  return (
    <div className="preview">
      <Anchor>
        <Link href="#page1" title="Welcome" />
        <Link href="#page2" title="Install" />
        <Link href="#page3" title="Uninstall Applications" />
        <Link href="#page4" title="Open Konsole" />
      </Anchor>
    </div>
  );
}

export default Preview;
