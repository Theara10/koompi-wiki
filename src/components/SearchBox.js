import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

function SearchBox() {
  const onSearch = (value) => console.log(value);
  return (
    <div className="search-container">
      <Space direction="vertical" className="search-box">
        <Search
          className="search"
          placeholder="Search..."
          onSearch={onSearch}
          style={{ width: 745 }}
          size="medium"
        />
      </Space>
    </div>
  );
}

export default SearchBox;
