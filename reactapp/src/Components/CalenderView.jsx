import React from 'react';

export default function CalendarView({ tasks, selectedDate, onDateChange }) {
  const filteredTasks = selectedDate
    ? tasks.filter((task) => task.date === selectedDate)
    : [];

  return (
    <div>
      <h2>Tasks on {selectedDate}</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
      />
      {selectedDate && filteredTasks.length === 0 && <p>No tasks</p>}
      {filteredTasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
