import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081/api", // Replace with your backend's base URL
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage or other secure storage
    const token = localStorage.getItem("token");

    // If token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Optionally, add a response interceptor to handle global responses
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Handle unauthorized errors, e.g., redirect to login
      console.error("Unauthorized access - Redirecting to login");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
