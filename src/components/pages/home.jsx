import React, { useEffect, useState } from "react";
import "../../App.css";
import AddTask from "../addTask";
import RenderTasks from "../renderTasks";
import { v4 as uuidv4 } from "uuid";
import Header from "../header";
import axios from "axios";

const Home = () => {
  //#region things
  const [task, setTask] = useState([
    {
      id: 0,
      title: "estudar node",
      completed: false,
    },
    {
      id: 1,
      title: "estudar react",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTask(data);
    };
    fetchTasks();
  }, []);

  const handleAddTask = (taskTitle) => {
    const newTasks = [
      ...task,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTask(newTasks);
  };

  const handleRemoveTask = (taskId) => {
    const newTasks = task.filter((tasks) => tasks.id !== taskId);

    setTask(newTasks);
  };

  const handleTaskComplete = (taskId) => {
    const newTasks = task.map((tasks) => {
      if (tasks.id === taskId) return { ...tasks, completed: !tasks.completed };

      return tasks;
    });

    setTask(newTasks);
  };
  //#endregion
  return (
    <div className="app">
      <Header />

      <AddTask handleAddTask={handleAddTask} />
      <RenderTasks
        props={task}
        handleTaskComplete={handleTaskComplete}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
};

export default Home;
