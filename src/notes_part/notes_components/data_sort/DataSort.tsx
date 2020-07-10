import React, { useState } from "react";
import { Tabs, DatePicker, Input } from "antd";
import "./data_sort.css";

import moment from "moment";

const { TabPane } = Tabs;
const { Search } = Input;

function callback(key: any) {
  console.log(key);
}

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

const DataSort = () => {
  const startPoint = moment(new Date());
  const [state, setState] = useState({
    value: startPoint,
    selectedValue: startPoint,
  });

  const { value, selectedValue } = state;
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="All" key="1" />
      <TabPane tab={<DatePicker onChange={onChange} />} key="2" />

      <TabPane
        tab={
          <Search
            className={"notes_search"}
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            enterButton
          />
        }
        key="3"
      />
    </Tabs>
  );
};

export default DataSort;
