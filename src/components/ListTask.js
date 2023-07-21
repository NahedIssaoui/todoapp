import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import '../App.css';

const ListTask = () => {
  const { doneTasks, notDoneTasks } = useSelector((state) => state.tasks);
  const [displayedTasks, setDisplayedTasks] = useState("all");

  const handleShowAllTasks = () => {
    setDisplayedTasks("all");
  };

  const handleShowDoneTasks = () => {
    setDisplayedTasks("done");
  };

  const handleShowNotDoneTasks = () => {
    setDisplayedTasks("notDone");
  };

  let tasksToShow = [];
  if (displayedTasks === "all") {
    tasksToShow = [...doneTasks, ...notDoneTasks];
  } else if (displayedTasks === "done") {
    tasksToShow = doneTasks;
  } else {
    tasksToShow = notDoneTasks;
  }

  return (
    <div>
      <div className='listtask'>
        <button onClick={handleShowAllTasks}>All Tasks</button>
        <button onClick={handleShowDoneTasks}>Done Tasks</button>
        <button onClick={handleShowNotDoneTasks}>Not Done Tasks</button>
      </div>
      {tasksToShow.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
