// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/tasks';

export const getTasks = () => axios.get(`${BASE_URL}/all`);
export const addTask = (taskData) => axios.post(`${BASE_URL}/add`, taskData);
