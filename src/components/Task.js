import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask, setEditTaskId } from '../redux/tasksSlice';
import '../App.css'


const Task = ({ task }) => {
  const { id, description, isDone } = task;
  const dispatch = useDispatch();
  const editTaskId = useSelector((state) => state.tasks.editTaskId); // Get the currently edited task ID from Redux store
  const [editedDescription, setEditedDescription] = useState(description);

  const handleToggleTask = () => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = () => {
    dispatch(setEditTaskId(id)); // Set the currently edited task ID in Redux store
  };

  const handleSaveTask = () => {
    if (editedDescription.trim()) {
      dispatch(editTask({ id, description: editedDescription }));
      dispatch(setEditTaskId(null)); // Reset the currently edited task ID
    }
  };

  return (
    <div>
      {editTaskId === id ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveTask}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={isDone}
            onChange={handleToggleTask}
          />
          <span className='taskdescription'>
            {description}
          </span>
          <button onClick={handleDeleteTask}>Delete</button>
          <button onClick={handleEditTask}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
