import React from "react";
import Task from "./task";

const RenderTasks = ({ props, handleTaskComplete, handleRemoveTask }) => {
  return (
    <>
      {props.map((task) => (
        <Task
          props={task}
          handleTaskComplete={handleTaskComplete}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </>
  );
};

export default RenderTasks;
