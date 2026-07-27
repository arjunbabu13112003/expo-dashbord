import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.220.86:3000",
});

export default api;