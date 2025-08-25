import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask({ task, date });
    setTask("");
    setDate("");
  };

  return (
    <div className="taskform-container">
      <form className="taskform-card" onSubmit={handleSubmit}>
        <h2>➕ Add a Task</h2>

        <input
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit" className="btn-submit">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
