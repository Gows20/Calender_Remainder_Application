import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CalendarView from "./pages/CalendarView";
import ReminderPage from "./pages/ReminderPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Home Page with navigation buttons */}
        <Route path="/home" element={<Home />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Calendar Page */}
        <Route path="/calendar" element={<CalendarView />} />

        {/* Reminder Page */}
        <Route path="/reminder" element={<ReminderPage />} />

        {/* Catch-all redirects to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;