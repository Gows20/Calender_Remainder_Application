import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminDashboard.css"; // styles

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tasks/all")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Calculate stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "Completed").length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        {/* Summary Section */}
        <div className="stats-container">
          <div className="stat-box total">
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>
          <div className="stat-box completed">
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>
          <div className="stat-box pending">
            <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>
        </div>

        {/* Task Table */}
        <div className="task-table">
          <h2>All Tasks</h2>
          {tasks.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.date}</td>
                    <td>{task.status || "Pending"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-task">No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
