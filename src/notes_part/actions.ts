export const addTodo = ({ text, title }: { text: string; title: string }) => {
  const time: Date = new Date();
  return {
    type: "ADD_TODO",
    id: time.getTime(),
    title: title,
    text: text,
  };
};
