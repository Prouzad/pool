import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "http://65.109.230.221:8560/api/v1/",
});
