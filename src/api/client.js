import axios from "axios";
import Cookies from "universal-cookie";
import config from "../config";

const client = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout,
});

client.interceptors.request.use((request) => {
  const isServer = typeof window === "undefined";
  if (!isServer) {
    // If in Browser add token to every request
    const cookies = new Cookies();
    const token = cookies.get("jwt");
    if (token) {
      request.headers.common.authorization = `Bearer ${token}`;
    }
  }
  // On Server you need to manually send the token
  return request;
});

client.interceptors.response.use(
  (response) =>
    // Format response
    response.data,
  (error) =>
    // Format Error
    Promise.reject(error)
);

export default client;
