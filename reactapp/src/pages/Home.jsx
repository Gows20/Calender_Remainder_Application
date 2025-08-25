import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';


function Home() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");

  const handleLogout = () => navigate("/login");

  // Set greeting message based on current time
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning!");
    } else if (hours < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  }, []); // no selectedDate needed

  const today = new Date();

  return (
    <div className="home-container">
      <h2>{greeting} Welcome to Reminder App</h2>
      <p>Today’s Date: {today.toDateString()}</p>

      <div className="home-buttons">
        <Link to="/calendar"><button className="btn">Go to Calendar</button></Link>
        <Link to="/dashboard"><button className="btn">Go to Dashboard</button></Link>
        <button className="btn danger" onClick={handleLogout}>Logout</button>
      </div>

      <p>Here you can manage tasks, set reminders, and track your schedule easily.</p>
    </div>
  );
}

export default Home;
