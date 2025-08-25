import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>🔔 Welcome to Reminder App</h1>
        <p>
          Organize your tasks, set reminders, and stay productive with our
          modern task management system.
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate("/login")} className="btn">
            Login
          </button>
          <button onClick={() => navigate("/register")} className="btn secondary">
            Register
          </button>
          <button onClick={() => navigate("/dashboard")} className="btn">
            Admin Dashboard
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
