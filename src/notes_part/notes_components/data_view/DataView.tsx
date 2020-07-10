import React, { FC, ReactElement, useRef, useEffect, useState } from "react";
import dayjs from "dayjs";
import { connect } from "react-redux";
import { Button, List, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { onChangeItemData } from "../../actions";
import AddData from "./AddData";

import "./dataView.css";

import { IItem, IState, IDataView } from "../../types";

const isEdited = (item: any) => {
  if (item.edited) {
    return " edited";
  }
};

const DataView: FC<IDataView> = (props: IDataView): ReactElement => {
  const [active, setActiveItem] = useState(props.activeItem);
  const viewDiv = useRef(null);
  const newData = [...props.data];

  const active_item = (item: any) => {
    return (
      <List.Item className={active === item.id ? "ant-list-item-active" : ""}>
        <div className="ant-list-item-data">
          <div className="ant-list-item-time">
            <span>
              {dayjs(item.date).format("H mma")} {isEdited(item)}
            </span>
            {editItem(item)}
          </div>
          {item.text}
        </div>
      </List.Item>
    );
  };

  const editItem = props.change_data
    ? (item: any) => (
        <Tooltip title="Edit" overlay={<div>Edit</div>}>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={(e) => {
              setActiveItem(item.id);
              //   console.log(e);
              // // @ts-ignore
              // const items = document.querySelector(".ant-list-items").children;
              // for (let i = 0; i < items.length; i++) {
              //   if (items[i].classList.contains("chosed-item")) {
              //     items[i].classList.remove("chosed-item");
              //   }
              // }
              //
              // e.target
              //   // @ts-ignore
              //   .closest(".ant-list-item")
              //   .classList.toggle("chosed-item");
              props.onChangeItemData(item);
            }}
          />
        </Tooltip>
      )
    : () => {};
  //Scroll down
  useEffect(() => {
    const currentElement = viewDiv.current;
    // @ts-ignore
    const height = currentElement.scrollHeight;
    // @ts-ignore
    currentElement.scrollTo(0, height);
    // fetchData()
  }, [props]);
  //end Scroll down
  return (
    <div
      className="scroll-pane"
      style={{
        height: "70vh",
        padding: "1%",
        border: "1px solid #d9d9d9",
        overflow: "auto",
      }}
      ref={viewDiv}
    >
      <List
        loading={props.data.loading}
        size="small"
        bordered
        dataSource={newData}
        renderItem={(item: IItem, index: number) => (
          <>
            {AddData(newData)(item, index)}
            {active_item(item)}
          </>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  loading: state.notes.loading,
  activeItem: state.notes.activeItem,
});

const mapDispatchToProps = (dispatch: any): any => {
  return {
    onChangeItemData: (item: object) => {
      dispatch(onChangeItemData(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataView);
