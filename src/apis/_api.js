// utils/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
