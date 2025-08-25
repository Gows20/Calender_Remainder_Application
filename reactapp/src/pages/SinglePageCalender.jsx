import React, { useState, useEffect } from 'react';
import './SinglePageCalendar.css';

function SinglePageCalendar() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [taskInput, setTaskInput] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Request notification permission
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const addTask = () => {
    if (!selectedDate || taskInput.trim() === "") {
      alert("Please select a date and enter a task");
      return;
    }

    const newTask = { date: selectedDate, task: taskInput };
    setTasks([...tasks, newTask]);
    setTaskInput("");

    // Browser Notification
    if (Notification.permission === "granted") {
      new Notification("Task Reminder Added!", {
        body: `Task for ${selectedDate}: ${taskInput}`,
        icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
      });
    }
  };

  return (
    <div className="spc-container">
      <h2>Calendar Reminders</h2>

      <div className="spc-inputs">
        <input 
          type="date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Enter task" 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)} 
        />
        <button className="btn-add" onClick={addTask}>Add Reminder</button>
      </div>

      <div className="spc-table">
        <h3>Scheduled Tasks</h3>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, idx) => (
                <tr key={idx}>
                  <td>{t.date}</td>
                  <td>{t.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default SinglePageCalendar;
