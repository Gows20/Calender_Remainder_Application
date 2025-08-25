import React from "react";
import "./login.css";
import { FaBell } from "react-icons/fa"; // install react-icons if not already

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="icon-wrapper">
          <FaBell className="bell-icon" />
          <span className="notification-dot">1</span>
        </div>
        <h2>Reminder</h2>
        <p>Enter your login details</p>

        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
