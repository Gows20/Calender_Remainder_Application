import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      title: task,
      date: date || "No due date",
      completed: false,
    };

    onAddTask(newTask);
    setTask("");
    setDate("");
  };

  return (
    <div className="max-w-md mx-auto bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Create a Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Title */}
        <div>
          <label className="block mb-1 text-sm">Task Title</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            className="w-full p-2 rounded-lg text-black focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
        </div>

        {/* Task Date */}
        <div>
          <label className="block mb-1 text-sm">Due Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 rounded-lg text-black focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
