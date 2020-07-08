import defaultState from "../config/viewData";

export const sendForm = ({ text }: { text: string; item: any }, item: any) => {
  const date: Date = new Date();
  const time: number = date.getTime();
  return (dispatch: any) => {
    if (item.id) {
      dispatch({
        type: "PATCH_ITEM_PROGRESS",
        payload: {
          id: item.id,
          date: item.date,
          edited: true,
          text,
        },
      });
    } else {
      dispatch({
        type: "ADD_NOTE",
        payload: {
          id: time + text,
          date,
          text,
        },
      });
    }
    setTimeout(() => {
      dispatch({
        type: "NOTE_SUCCESS",
      });
    }, 1000);
  };
};

export const fetchData = () => (dispatch: any) => {
  dispatch({
    type: "FETCHING_DATA",
    payload: defaultState,
  });
};

export const onChangeItemData = (item: object) => (dispatch: any) => {
  dispatch({
    type: "CHANGING_DATA_ITEM_START",
    playload: item,
  });
};
