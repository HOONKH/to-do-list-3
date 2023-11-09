const Todo = ({ todo, index, todos, setTodos }) => {
  const onClickDone = () => {
    const newTodos = todos.map((v, i) => {
      if (v.id == todo.id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });
    setTodos(newTodos);
  };

  const onClickDelete = () => {
    const newTodos = todos.filter((v, i) => {
      if (v.id !== todo.id) {
        return v;
      }
    });
    setTodos(newTodos);
  };
  return (
    <li
      className={` w-96 p-4 rounded-md ${
        index % 2 ? "bg-blue-300" : "bg-blue-600"
      }`}
    >
      <span className="w-2/12 inline-block text-center text-white">
        {todo.id}
      </span>
      <button
        className={`${
          todo.isDone && "line-through"
        } pl-4 w-3/4 inline-block text-white`}
        onClick={onClickDone}
      >
        {todo.title}
      </button>
      <button
        className="w-1/12 inline-block text-center text-white"
        onClick={onClickDelete}
      >
        Del
      </button>
    </li>
  );
};
export default Todo;
