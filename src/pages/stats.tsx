import React from "react";

import DataView from "../notes_part/notes_components/data_view";
import DataSort from "../notes_part/notes_components/data_sort";
import { Helmet } from "react-helmet";

const Stats = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Stats</title>
      </Helmet>
      <DataSort />
      <DataView />
    </>
  );
};

export default Stats;
