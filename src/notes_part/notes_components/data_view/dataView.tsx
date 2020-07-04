import React, { FC, ReactElement, useRef, useEffect } from "react";
import moment from "moment";
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
        renderItem={(item: any) => (
          <List.Item>
            {item.text}, {moment(item.date).format("MMMM")}
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  notes: state.notes,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DataView);
