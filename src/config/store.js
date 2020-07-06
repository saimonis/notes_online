import { combineReducers } from "redux";
import { notes, form } from "../notes_part/reducers";

export default combineReducers({
  notes,
  form,
});
