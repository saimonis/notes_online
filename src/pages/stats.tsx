import React from "react";

import DataView from "../notes_part/notes_components/data_view";
import DataSort from "../notes_part/notes_components/data_sort";
import { fetchData } from "../notes_part/actions";
import { IState } from "../notes_part/types";
import { connect } from "react-redux";

const Stats = (props: any) => {
  return (
    <>
      <DataSort />
      <DataView />
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

const mapStateToProps = (state: IState) => {
  return {
    data: state.notes.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
