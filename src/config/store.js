import { combineReducers } from "redux";
import { notes } from "../notes_part/reducers";
import form from "../notes_part/notes_components/notes_form/form_reducer";

export default combineReducers({
  notes,
  form,
});
