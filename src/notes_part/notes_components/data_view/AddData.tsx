import React from "react";
import { IItem } from "./data_view_types";
import ListDateItem from "./ListDateItem";

const AddData = (data: IItem[]) => {
  let i = 1;
  return (item: IItem, index: number) => {
    if (index === 0) {
      return <ListDateItem item={item} index={index} />;
    }
    if (
      data[index - 1].date.toDateString() &&
      data[index - 1].date.toDateString() !== data[index].date.toDateString()
    ) {
      i = 1;
    } else {
      i++;
    }
    if (i === 1) {
      return <ListDateItem item={item} index={index} />;
    }
  };
};

export default AddData;
