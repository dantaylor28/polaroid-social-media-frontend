import axios from "axios";

// axios.defaults.baseURL = "https://social-media-drf-api.herokuapp.com/";
// axios.defaults.baseURL = "https://drf-api-2024-2-40c549d91729.herokuapp.com/";
// axios.defaults.baseURL = "https://drf-api-2024-2-40c549d91729.herokuapp.com/";
axios.defaults.baseURL = "https://drf-api-2024-5-1a986cf1c53f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
