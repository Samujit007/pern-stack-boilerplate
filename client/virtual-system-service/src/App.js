import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from './components/pages/auth/login';
import Register from './components/pages/auth/register';
import Tab1 from './components/pages/tab1';
import Tab2 from './components/pages/tab2';
import Header from './components/header';
import useAuthStore from './store/useAuthStore';
import {decodeToken} from '../src/components/utils';

const App = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const token = localStorage.getItem('token');
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    if (token) {
      setToken(token);
      const decodedToken = decodeToken(token);
      if (decodedToken && decodedToken.expiresIn > Date.now()) {
        setToken(token);
        setUser(decodedToken);
      } else {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
      }
    }
    
  }, [setToken, setUser, token]);


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tab1" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
      </Routes>
    </Router>
  );
};
export default App;