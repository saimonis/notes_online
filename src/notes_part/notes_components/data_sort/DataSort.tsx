import React, { useState, useEffect } from "react";
import { Tabs, DatePicker, Input } from "antd";
import "./data_sort.css";

import moment from "moment";
import { onSortData } from "../../actions";
import { connect } from "react-redux";

const { TabPane } = Tabs;
const { Search } = Input;

const DataSort = (props: any) => {
  // const [key, setKey] = useState("1");
  const [fieldValue, setFieldValue] = useState();
  useEffect(() => {
    props.onSortData("");
  }, [props]);
  const tabs = (value: any) => {
    return (
      <>
        <TabPane
          tab={
            <div
              onClick={() => {
                props.onSortData("");
              }}
            >
              All
            </div>
          }
          key="1"
        />
        <TabPane
          tab={
            <DatePicker
              value={value ? moment(value) : null}
              onChange={(date: any, dateString: any) => {
                setFieldValue(dateString);
                if (!date) {
                  props.onSortData("");
                } else {
                  props.onSortData(date);
                }
              }}
            />
          }
          key="2"
        />

        <TabPane
          tab={
            <Search
              className={"notes_search"}
              placeholder="input search text"
              onSearch={(text) => {
                props.onSortData(text);
              }}
              enterButton
            />
          }
          key="3"
        />
      </>
    );
  };

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={(key) => {
        // @ts-ignore
        // setKey((prev)=>{
        //     if(prev === key){
        //         return prev
        //     }else{
        //         setFieldValue(false);
        //         props.onSortData("");
        //         return key
        //     }
        // });
      }}
    >
      {tabs(fieldValue)}
    </Tabs>
  );
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    onSortData: (text: string) => {
      dispatch(onSortData(text));
    },
  };
};

export default connect(() => ({}), mapDispatchToProps)(DataSort);
