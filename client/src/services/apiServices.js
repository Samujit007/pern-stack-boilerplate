import axios from 'axios';
import useAuthStore from '../store/useAuthStore';
import {decodeToken} from '../../src/components/utils';
console.log("process.env.REACT_APP_ENV: ", process.env.REACT_APP_ENV)
const backendAPIURL = process.env.REACT_APP_ENV === "dev" ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD

const api = axios.create({
  baseURL: backendAPIURL,
});

// Axios interceptor to add token to headers of all requests
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && decodedToken.expiresIn > Date.now()) {
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        localStorage.removeItem('token');
        useAuthStore.getState().logout();
        window.location.href = '/login'; // Redirect to login page
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Fetch profile example
const fetchProfile = async () => {
  try {
    const response = await api.get('/auth/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { register, login, fetchProfile };
