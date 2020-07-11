import { List } from "antd";
import moment from "moment";
import React from "react";

const ListDateItem: any = (props: any): any => (
  <List.Item>
    <div className="ant-list-item-time">{moment(props.item.date).format("DD MMMM YYYY")}</div>
  </List.Item>
);

export default ListDateItem;
