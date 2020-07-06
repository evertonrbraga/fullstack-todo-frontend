import axios from "axios";

const api = axios.create({
  baseURL: "https://fullstack-todo-backend.herokuapp.com/api",
});

export default api;
