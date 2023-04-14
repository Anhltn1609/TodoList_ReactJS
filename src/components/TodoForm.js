import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])

const handleChange = e => {
    setInput(e.target.value);
}

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput('');

  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
    {props.edit ? (<div>
      <input
        type="text"
        placeholder="Update your data"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref = { inputRef}
      />
      <button className="todo-button"> Update</button>
    </div> ) :(
      <div>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref = { inputRef}
      />
      <button className="todo-button"> Add Todo</button>
      </div>
    )}
      
    </form>
  );
}

export default TodoForm;
