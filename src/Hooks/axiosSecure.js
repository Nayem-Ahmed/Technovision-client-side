import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

axiosSecure.interceptors.request.use(
  function(config) {
    // You can modify the request config here if needed
    return config;
  },
  function(error) {
    // Handle request error
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosSecure.interceptors.response.use(
  function(response) {
    // You can modify the response config here if needed
    return response;
  },
  function(error) {
    // Handle response error
    console.error("Response error:", error);
    
    // Optionally, you can check for specific error statuses and take actions accordingly
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      const navigate = useNavigate();
      navigate('/login');
    } else {
      // Handle other errors
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
