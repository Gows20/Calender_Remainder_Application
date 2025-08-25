import React, { useState } from "react";
import "./ReminderPage.css";

const ReminderPage = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState({ text: "", date: "" });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    if (!newTask.text || !newTask.date) return alert("Enter task & date");
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask({ text: "", date: "" });
    alert("✅ Task added successfully!");
  };

  return (
    <div className="reminder-container">
      <h1>Reminder Page</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Task description"
          name="text"
          value={newTask.text}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="date"
          value={newTask.date}
          onChange={handleChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-list">
        <h2>All Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task, idx) => (
              <li key={idx}>
                {task.text} - {new Date(task.date).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReminderPage;
