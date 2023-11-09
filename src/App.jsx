import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

const App = () => {
  const [todoIds, setTodoIds] = useState(2);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "코딩하기🔥",
      isDone: false,
    },
  ]);
  return (
    <main className="min-h-screen py-20 flex flex-col justify-start items-center bg-orange-200">
      <CreateTodo
        setTodos={setTodos}
        todos={todos}
        todoIds={todoIds}
        setTodoIds={setTodoIds}
      />
      <ul className="mt-8">
        {todos.map((v, i) => (
          <Todo key={i} todo={v} index={i} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </main>
  );
};

export default App;
