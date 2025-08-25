public class TaskDetailsForm {
    import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable form component for creating tasks.
 * Fields: Title, Description, Due Date.
 * Validates that all fields are filled before submission.
 */
export default function TaskCreationForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !description || !date) {
      setError('All fields are required.');
      return;
    }

    const newTask = { title, description, date };
    onTaskAdded(newTask);

    // Reset fields
    setTitle('');
    setDescription('');
    setDate('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Create Task</h2>
      {error && <p style={styles.error}>{error}</p>}
      <div style={styles.field}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          placeholder="Enter task title"
        />
      </div>
      <div style={styles.field}>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ ...styles.input, height: '80px' }}
          placeholder="Task details"
        />
      </div>
      <div style={styles.field}>
        <label>Due Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Add Task</button>
    </form>
  );
}

TaskCreationForm.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    background: '#f9f9f9',
  },
  field: {
    marginBottom: '0.75rem',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '4px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#28a745',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '0.5rem',
  },
};

}
