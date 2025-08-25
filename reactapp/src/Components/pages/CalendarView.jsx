import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // custom styles
import { FaBell } from "react-icons/fa";
import axios from "axios";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks/all")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Format selected date to YYYY-MM-DD
  const formatDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  // Filter tasks by selected date
  const filteredTasks = tasks.filter(
    (task) => task.date === formatDate(date)
  );

  return (
    <div className="calendar-container">
      <div className="calendar-card">
        <div className="icon-wrapper">
          <FaBell className="bell-icon" />
          <span className="notification-dot">
            {filteredTasks.length}
          </span>
        </div>
        <h2>Calendar Reminder</h2>
        <p>Select a date to see your tasks</p>

        <Calendar
          onChange={setDate}
          value={date}
          className="custom-calendar"
        />

        <div className="task-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <div key={task.id} className="task-item">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
              </div>
            ))
          ) : (
            <p className="no-task">No tasks scheduled</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
