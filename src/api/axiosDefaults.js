import axios from "axios";

// axios.defaults.baseURL = "https://social-media-drf-api.herokuapp.com/";
// axios.defaults.baseURL = "https://drf-api-2024-2-40c549d91729.herokuapp.com/";
// axios.defaults.baseURL = "https://drf-api-2024-2-40c549d91729.herokuapp.com/";
axios.defaults.baseURL = "https://drf-api-2024-4-db38bd32f1cd.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
