import React, { FC } from "react";

import DataView from "../notes_part/notes_components/data_view";
import NotesForm from "../notes_part/notes_components/notes_form/NotesForm";

const Main: FC<any> = () => {
  return (
    <>
      <DataView hours={2224} />
      <NotesForm />
    </>
  );
};

export default Main;
