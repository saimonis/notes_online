import { List } from "antd";
import dayjs from "dayjs";
import React from "react";

const ListDateItem: any = (props: any): any => (
  <List.Item>
    <div className="ant-list-item-time">
      {dayjs(props.item.date).format("DD MMMM YYYY")}
    </div>
  </List.Item>
);

export default ListDateItem;
