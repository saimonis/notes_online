export const addTodo = ({ text }: { text: string }) => {
  const date: Date = new Date();
  const time: number = date.getTime();
  return {
    type: "ADD_TODO",
    id: time + text,
    date,
    text,
  };
};
