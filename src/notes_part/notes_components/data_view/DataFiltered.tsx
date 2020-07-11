import React, { useEffect } from "react";
import DataView from "./DataView";
import { fetchData } from "../../actions";
import { IItem } from "./data_view_types";
import { connect } from "react-redux";

interface IDataFiltered {
  hours?: number;
  change_data?: boolean;
  data?: [];
  activeItem?: string;
  sortType?: string | object;
}

const dataFilter = (props: any) => {
  let data = props.data;
  let hours = props.hours ? props.hours : null;

  let newData: IItem[];
  if (hours) {
    newData = data.filter((item: IItem) => {
      return new Date().getTime() / 1000 / 60 / 60 - item.date.getTime() / 1000 / 60 / 60 <= hours;
    });
  } else newData = [...data];
  newData.sort((a: IItem, b: IItem) => {
    return a.date.getTime() - b.date.getTime();
  });

  return newData;
};

const DataFiltered = (props: IDataFiltered) => {
  useEffect(() => {
    // @ts-ignore
    props.fetchData();
  }, []);

  const sort = (data: any) => {
    return (sortType: any) => {
      if (typeof sortType === "object") {
        return data.filter((item: IItem) => {
          if (sortType.valueOf() <= item.date.getTime()) {
            return item;
          }
        });
      }
      return data.filter((item: IItem) => {
        if (item.text.includes(sortType)) {
          return item;
        }
      });
    };
  };
  const data = sort(dataFilter(props))(props.sortType);
  return (
    <>
      <DataView data={data} change_data={props.change_data} />
    </>
  );
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
  };
};

const mapStateToProps = ({ notes }: any) => {
  return {
    data: notes.data,
    sortType: notes.sortType,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataFiltered);
