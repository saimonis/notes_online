const defaultState: any = [];

for (let i = 0; i < 15; i++) {
  defaultState.push({
    id: 1 + i,
    date: new Date(),
    text: "Here is text" + i,
  });
}

const notes = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          date: action.date,
          text: action.text,
        },
      ];
    default:
      return state;
  }
};

export default notes;
