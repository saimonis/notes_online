import React, { FC, ReactElement, useRef, useEffect, ReactNode } from "react";
import dayjs from "dayjs";
import { connect } from "react-redux";
import { List } from "antd";

import "./dataView.css";

interface IPropTypes {
  notes?: any;
  show: string;
  children?: ReactNode;
}

const DataView: FC<IPropTypes> = ({ notes }: IPropTypes): ReactElement => {
  const viewDiv = useRef(null);
  useEffect(() => {
    const currentElement = viewDiv.current;
    // @ts-ignore
    const height = currentElement.scrollHeight;
    // @ts-ignore
    currentElement.scrollTo(0, height);
  }, [notes]);
  let i = 1;
  const addData = (item: any, index: number) => {
    if (notes[index + 1]) {
      if (
        notes[index].date.toDateString() !==
        notes[index + 1].date.toDateString()
      ) {
        i++;
      } else {
        i = 1;
        if (
          new Date().getTime() / 1000 / 60 / 60 -
            item.date.getTime() / 1000 / 60 / 60 &&
          i === 1
        ) {
          return (
            <List.Item>
              <div className="ant-list-item-time">
                {item.date.toDateString()}
              </div>
            </List.Item>
          );
        }
      }
    }
    if (index === 0) {
      return (
        <List.Item>
          <div className="ant-list-item-time">{item.date.toDateString()}</div>
        </List.Item>
      );
    }
  };
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
        size="small"
        bordered
        dataSource={notes}
        renderItem={(item: any, index: number) => (
          <>
            {addData(item, index)}
            <List.Item>
              <div className="ant-list-item-time">
                {item.date ? dayjs(item.date).format("H mma") : null}
              </div>
              {item.text} {index}
            </List.Item>
          </>
        )}
      />
    </div>
  );
};

const dataFilter = (data: any, hours?: number) => {
  let newData: any;
  if (hours) {
    newData = data.filter((item: any) => {
      return (
        new Date().getTime() / 1000 / 60 / 60 -
          item.date.getTime() / 1000 / 60 / 60 <=
        hours
      );
    });
  } else newData = [...data];
  newData.sort((a: any, b: any) => {
    return a.date.getTime() - b.date.getTime();
  });

  return newData;
};

const mapStateToProps = (state: any, ownProps: any) => ({
  notes: (() => {
    let { hours } = ownProps;
    return dataFilter(state.notes, hours);
  })(),
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DataView);
