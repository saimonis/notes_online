import { iNotesFormState, iAction } from "./types_notes_form";

const formDefaultState: iNotesFormState = { item: {}, loading: false };

const form = (state = formDefaultState, action: iAction) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, loading: true };
    case "NOTE_SUCCESS":
      return { ...state, item: false, loading: false };
    case "CHANGING_DATA_ITEM_START":
      return { ...state, item: { ...action.payload } };
    case "PATCH_ITEM_PROGRESS":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default form;
