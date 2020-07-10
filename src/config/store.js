import { combineReducers } from "redux";
import notes from "../notes_part/notes_components/data_view/data_view_reducer";
import form from "../notes_part/notes_components/notes_form/form_reducer";

export default combineReducers({
  notes,
  form,
});
