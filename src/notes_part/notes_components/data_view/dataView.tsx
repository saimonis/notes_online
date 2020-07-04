import React, { FC, ReactElement, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { List } from "antd";

import "./dataView.css";

const DataView: FC = ({ notes }: any): ReactElement => {
  const viewDiv = useRef(null);
  useEffect(() => {
    const currentElement = viewDiv.current;
    // @ts-ignore
    const height = currentElement.scrollHeight;
    // @ts-ignore
    currentElement.scrollTo(0, height);
  }, [notes]);
  return (
    <div
      className="scroll-pane"
      style={{
        height: "30vh",
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
        renderItem={(item: any) => (
          <List.Item>
            {item.text}, {item.date.toDateString()}
          </List.Item>
        )}
      />
    </div>
  );
};

DataView.defaultProps = {
  notes: [
    {
      id: 2,
      title: "Here is title",
      text: "Here is text",
    },
    {
      id: 1,
      title: "Here is title",
      text: "Here is text",
    },
  ],
};

const mapStateToProps = (state: any) => ({
  notes: state.notes,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DataView);
