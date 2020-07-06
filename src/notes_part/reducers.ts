interface INotesDefaultState {
  payload: any;
  loading: boolean;
}

const notesDefaultState: INotesDefaultState = { payload: [], loading: true };

export const notes = (state: any = notesDefaultState, action: any) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        payload: [...action.payload],
        loading: false,
      };
    case "ADD_NOTE":
      return {
        payload: [...state.payload, { ...action.payload }],
      };
    default:
      return state;
  }
};

const formDefaultState: any = { loading: false };

export const form = (state = formDefaultState, action: any) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        loading: false,
      };
    case "ADD_NOTE_SUCCESS":
      return {
        loading: false,
      };
    default:
      return state;
  }
};
