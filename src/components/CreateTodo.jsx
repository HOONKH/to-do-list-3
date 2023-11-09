import { useState } from "react";

const CreateTodo = ({ setTodos, todos, todoIds, setTodoIds }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitNewTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    setTodos([...todos, { id: todoIds, title: newTodo, isDone: false }]);
    setTodoIds(todoIds + 1);
    setNewTodo("");
  };

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={onSubmitNewTodo}>
      <input
        class="px-4 py-2 borde-2 rounded-md focus:outline-none focus:border-purple-400"
        type="text"
        value={newTodo}
        onChange={onChangeNewTodo}
      />
      <input
        className="px-4 py-2 bg-purple-100 ml-4 rounded-md shadow-2xl"
        type="submit"
        value="추 가"
      />
    </form>
  );
};
export default CreateTodo;
