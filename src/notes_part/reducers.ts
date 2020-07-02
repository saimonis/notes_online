const defaultState = [
  {
    id: 1,
    text: "Here is nothing",
  },
];

const notes = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    default:
      return state;
  }
};

export default notes;
