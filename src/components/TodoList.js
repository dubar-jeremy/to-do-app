import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="list-items-container">
      <ul>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
