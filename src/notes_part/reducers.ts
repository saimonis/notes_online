interface INotesDefaultState {
  data: any;
  loading: boolean;
  activeItem: string;
}

const notesDefaultState: INotesDefaultState = {
  data: [],
  loading: true,
  activeItem: "",
};

export const notes = (state: any = notesDefaultState, action: any) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        data: [...action.payload],
        loading: false,
      };
    case "ADD_NOTE":
      return {
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
      return { ...state, activeItem: "", loading: false };
    default:
      return state;
  }
};
