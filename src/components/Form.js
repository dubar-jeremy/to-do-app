import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, status, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "")
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random(1000),
        },
      ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="add-items">
      <div className="add-items-btns-container">
        <button className={"item-btns"} onClick={statusHandler} value="all">
          All
        </button>
        <button className={"item-btns"} onClick={statusHandler} value="uncompleted">
          Active
        </button>
        <button className="item-btns" onClick={statusHandler} value="completed">
          Completed
        </button>
      </div>
      <form>
        <input
          className={`input-add-items ${status === "completed" ? "hide" : ""}`}
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          placeholder="add details"
        ></input>
        <button
          className={`add-item-btn ${status === "completed" ? "hide" : ""}`}
          onClick={submitTodoHandler}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
