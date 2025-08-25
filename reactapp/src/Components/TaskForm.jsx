// src/pages/TaskForm.jsx
import React, { useState } from "react";
import { FaTasks, FaCalendarAlt, FaSave } from "react-icons/fa";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Task Created:\n${JSON.stringify(task, null, 2)}`);
    setTask({
      title: "",
      description: "",
      dueDate: "",
      priority: "Medium",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center mb-6">
          <FaTasks className="text-indigo-600 text-3xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Create Task</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium">Task Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter task title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter task details"
              rows="3"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-gray-700 font-medium flex items-center">
              <FaCalendarAlt className="mr-2 text-indigo-500" /> Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-gray-700 font-medium">Priority</label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            <FaSave className="mr-2" /> Save Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
