interface INotesDefaultState {
  data: any;
  loading: boolean;
  sortType: string | object;
}

const notesDefaultState: INotesDefaultState = {
  data: [],
  loading: true,
  sortType: "",
};

const notes = (state: any = notesDefaultState, action: any) => {
  switch (action.type) {
    case "SORT_DATA":
      return {
        ...state,
        sortType: action.sortType,
      };
    case "FETCHING_DATA":
      return {
        ...state,
        data: [...action.payload],
        loading: false,
      };
    case "ADD_NOTE":
      return {
        ...state,
        data: [...state.data, { ...action.payload }],
      };
    case "PATCH_ITEM_PROGRESS":
      return {
        ...state,
        data: state.data.map((i: any) => {
          if (i.id === action.payload.id) {
            return action.payload;
          }
          return i;
        }),
      };
    case "NOTE_SUCCESS":
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default notes;
