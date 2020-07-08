import React, { FC, ReactElement, useRef, useEffect } from "react";
import dayjs from "dayjs";
import { connect } from "react-redux";
import { Button, List, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { fetchData, onChangeItemData } from "../../actions";
import AddData from "./AddData";

import "./dataView.css";

import { IItem, IState, IDataView } from "../../types";

const isEdited = (item: any) => {
  if (item.edited) {
    return " edited";
  }
};

const DataView: FC<IDataView> = (props: IDataView): ReactElement => {
  const viewDiv = useRef(null);
  const newData = [...props.data.payload];

  const editItem = props.change_data
    ? (item: object) => (
        <Tooltip title="Edit" overlay={<div>Edit</div>}>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => {
              props.onChangeItemData(item);
            }}
          />
        </Tooltip>
      )
    : () => {};

  useEffect(() => {
    // @ts-ignore
    props.fetchData();
  }, []);
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
            <List.Item>
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
          </>
        )}
      />
    </div>
  );
};

const dataFilter = (data: IItem[], hours?: number) => {
  let newData: IItem[];
  if (hours) {
    newData = data.filter((item: IItem) => {
      return (
        new Date().getTime() / 1000 / 60 / 60 -
          item.date.getTime() / 1000 / 60 / 60 <=
        hours
      );
    });
  } else newData = [...data];
  newData.sort((a: IItem, b: IItem) => {
    return a.date.getTime() - b.date.getTime();
  });

  return newData;
};

const mapStateToProps = (state: IState, ownProps: { hours?: number }) => ({
  data: (() => {
    let { hours } = ownProps;
    return {
      payload: dataFilter(state.notes.data, hours),
      loading: state.notes.loading,
    };
  })(),
});
const mapDispatchToProps = (dispatch: any): any => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
    onChangeItemData: (item: object) => {
      dispatch(onChangeItemData(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataView);
