interface INotesDefaultState {
  data: any;
  loading: boolean;
}

const notesDefaultState: INotesDefaultState = { data: [], loading: true };

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
    default:
      return state;
  }
};

interface IFormDefaultState {
  loading: boolean;
  item: boolean | object;
}

const formDefaultState: IFormDefaultState = { item: false, loading: false };

export const form = (state = formDefaultState, action: any) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, loading: true };
    case "NOTE_SUCCESS":
      return { ...state, item: false, loading: false };
    case "CHANGING_DATA_ITEM_START":
      return { ...state, item: { ...action.playload } };
    case "PATCH_ITEM_PROGRESS":
      return { ...state, loading: true };
    default:
      return state;
  }
};
