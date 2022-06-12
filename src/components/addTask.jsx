import React, { useState } from "react";
import "../App.css";
import Button from "./button";

const AddTask = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");

  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskClickAdd = () => {
    if (title !== "") {
      handleAddTask(title);
      setTitle("");
    }
  };

  return (
    <div className="add-task">
      <input type="text" value={title} onChange={handleChangeInput} />
      <div className="container-task-button">
        <Button onClick={handleTaskClickAdd}>adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
