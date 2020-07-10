import React from "react";

import DataView from "../notes_part/notes_components/data_view";
import NotesForm from "../notes_part/notes_components/notes_form/NotesForm";

const Main = () => {
  return (
    <>
      <div>За последние 24ч</div>
      <DataView hours={24} change_data={true} />
      <NotesForm />
    </>
  );
};

export default Main;
