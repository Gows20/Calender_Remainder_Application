import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => navigate("/login");

  return (
    <div className="home-container"> {/* same style as Home */}
      <h2>Admin Dashboard</h2>
      <p>Manage users, tasks, and system settings here.</p>

      <div className="home-buttons">
        <Link to="/home"><button className="btn">Go to Home</button></Link>
        <Link to="/calendar"><button className="btn">Go to Calendar</button></Link>
        <button className="btn danger" onClick={handleLogout}>Logout</button>
      </div>

      <div className="admin-sections">
        <div className="admin-card"><h3>User Management</h3><p>Manage app users.</p></div>
        <div className="admin-card"><h3>Task Overview</h3><p>View all tasks.</p></div>
        <div className="admin-card"><h3>Calendar Events</h3><p>Global reminders.</p></div>
        <div className="admin-card"><h3>Analytics</h3><p>Track app usage.</p></div>
        <div className="admin-card"><h3>Notifications</h3><p>Send announcements.</p></div>
        <div className="admin-card"><h3>System Settings</h3><p>Security & config.</p></div>
        <div className="admin-card"><h3>Support</h3><p>Handle feedback.</p></div>
      </div>
    </div>
  );
}

export default AdminDashboard;
