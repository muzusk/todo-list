import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import "../App.css";

const Task = ({ props, handleTaskComplete, handleRemoveTask }) => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate(`/${props.title}`);
  };

  return (
    <div
      className="task"
      style={props.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskComplete(props.id)}>
        {props.title}
      </div>

      <div className="btn-container">
        <button className="remove" onClick={() => handleRemoveTask(props.id)}>
          <AiOutlineClose size={20} />
        </button>

        <button className="see" onClick={handleInfoClick}>
          <AiOutlineInfoCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default Task;
