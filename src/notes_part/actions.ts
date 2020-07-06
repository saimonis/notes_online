import defaultState from "../config/viewData";

export const addTodo = ({ text }: { text: string }) => {
  const date: Date = new Date();
  const time: number = date.getTime();
  return {
    type: "ADD_NOTE",
    payload: {
      id: time + text,
      date,
      text,
    },
  };
};

// const fun = async ()=>{
//   let newData;
//   await new Promise((res,rej) => {res(defaultState)}).then(data=>{newData=data});
//   return newData
// };

export const fetchData = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch({
      type: "FETCHING_DATA",
      payload: defaultState,
    });
  }, 1000);
};
