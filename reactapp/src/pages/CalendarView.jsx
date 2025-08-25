import React, { useState, useEffect } from 'react';
import './CalendarView.css';

function CalendarView() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [taskInput, setTaskInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get year and month
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // First day of month and days in month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

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

  // Add new task
  const addTask = () => {
    if (!selectedDate) return alert("Select a date first!");
    if (!taskInput.trim()) return;

    const newTask = { date: selectedDate.toDateString(), task: taskInput };
    setTasks([...tasks, newTask]);
    setTaskInput("");

    if (Notification.permission === "granted") {
      new Notification("Task Reminder Set!", {
        body: `Task for ${selectedDate.toDateString()}: ${taskInput}`,
        icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
      });
    }
  };

  const tasksForDate = selectedDate
    ? tasks.filter(t => t.date === selectedDate.toDateString())
    : [];

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1));

  return (
    <div className="calendar-container">
      <div className="month-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentMonth.toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task reminder"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Reminder</button>
      </div>

      <div className="calendar-grid">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d, idx) => (
          <div key={idx} className="weekday">{d}</div>
        ))}

        {calendarDays.map((day, idx) => (
          <div
            key={idx}
            className={`day ${day && selectedDate && selectedDate.getDate() === day ? 'selected' : ''} ${day ? '' : 'empty'}`}
            onClick={() => day && setSelectedDate(new Date(year, month, day))}
          >
            {day && <strong>{day}</strong>}
            {day && tasks
              .filter(t => t.date === new Date(year, month, day).toDateString())
              .map((t, i) => (
                <p key={i} className="task">{t.task}</p>
              ))}
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="task-list">
          <h3>Tasks for {selectedDate.toDateString()}</h3>
          {tasksForDate.length === 0 ? <p>No tasks for this date</p> :
            <ul>
              {tasksForDate.map((t, idx) => <li key={idx}>{t.task}</li>)}
            </ul>
          }
        </div>
      )}
    </div>
  );
}

export default CalendarView;
