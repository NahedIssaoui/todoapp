import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTasks: [],
  doneTasks: [],
  notDoneTasks: [],
  editTaskId: null, // New property to keep track of the currently edited task ID
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const newTask = { id, description, isDone };
      state.allTasks.push(newTask);
      if (isDone) {
        state.doneTasks.push(newTask);
      } else {
        state.notDoneTasks.push(newTask);
      }
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.allTasks = state.allTasks.filter((task) => task.id !== id);
      state.doneTasks = state.doneTasks.filter((task) => task.id !== id);
      state.notDoneTasks = state.notDoneTasks.filter((task) => task.id !== id);
    },
    toggleTask: (state, action) => {
      const id = action.payload;
      const task = state.allTasks.find((task) => task.id === id);
      if (task) {
        task.isDone = !task.isDone;
        state.doneTasks = state.allTasks.filter((task) => task.isDone);
        state.notDoneTasks = state.allTasks.filter((task) => !task.isDone);
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.allTasks.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    setEditTaskId: (state, action) => {
      state.editTaskId = action.payload;
    }, // New action to set the currently edited task ID
  },
});

export const {
  addTask,
  deleteTask,
  toggleTask,
  editTask,
  setEditTaskId, // Export the new action
} = tasksSlice.actions;

export default tasksSlice.reducer;
