// src/Pages/Dashboard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [tasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const handleLogout = () => navigate("/login");

  // Count tasks
  const totalTasks = tasks.length;
  const todayTasks = tasks.filter(
    t => t.date === new Date().toDateString()
  ).length;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-buttons">
          <Link to="/calendar"><button className="btn">Calendar</button></Link>
          <button className="btn danger" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>
        <div className="card">
          <h3>Today's Tasks</h3>
          <p>{todayTasks}</p>
        </div>
        <div className="card">
          <h3>Upcoming Reminders</h3>
          <p>{tasks.filter(t => new Date(t.date) > new Date()).length}</p>
        </div>
        <div className="card">
          <h3>Past Tasks</h3>
          <p>{tasks.filter(t => new Date(t.date) < new Date()).length}</p>
        </div>
        <div className="card">
          <h3>First Task</h3>
          <p>{tasks[0]?.task || "No tasks yet"}</p>
        </div>
        <div className="card">
          <h3>Last Task</h3>
          <p>{tasks[tasks.length - 1]?.task || "No tasks yet"}</p>
        </div>
        <div className="card">
          <h3>Next Task Date</h3>
          <p>{tasks.find(t => new Date(t.date) >= new Date())?.date || "No upcoming tasks"}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
