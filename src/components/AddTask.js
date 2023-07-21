import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
      const id = Date.now().toString();
      dispatch(addTask({ id, description: newTask, isDone: false }));
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
