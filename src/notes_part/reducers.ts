const defaultState: any = [];

for (let i = 0; i < 2; i++) {
  const date = new Date();
  defaultState.push({
    id: 1 + i + "",
    date: date,
    text: `index ${i}, ${date.toTimeString()}`,
  });
}

defaultState.push({
  id: new Date().getTime() + 11 + "",
  date: new Date(1593811111128),
  text: "04",
});

defaultState.push({
  id: new Date().getTime() + 12 + "",
  date: new Date(1593711111128),
  text: "02",
});

defaultState.push({
  id: new Date().getTime() + 122 + "",
  date: new Date(1593711111128),
  text: "02",
});

defaultState.push({
  id: new Date().getTime() + 13 + "",
  date: new Date(1593611111128),
  text: "02",
});

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
