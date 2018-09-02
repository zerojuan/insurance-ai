import axios from "axios";
import env from "./env";

const { API_URL } = env;
const apiInstance = axios.create({
  baseURL: API_URL
});

export default apiInstance;
