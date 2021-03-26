import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="list-items">
      <li className={`item ${todo.completed ? "completed" : ""}`}>
        <input className="input-check" onClick={completeHandler} type="checkbox"></input>
        {todo.text}
      </li>
      <i className="fas fa-trash" onClick={deleteHandler}></i>
    </div>
  );
};

export default Todo;
