import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // base URL Laravel
  withCredentials: true, // jika pakai login (Sanctum)
});

export default api;
