import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>To Do List </h1>
        <AddTask />
        <ListTask />
      </div>
  );
}

export default App;
