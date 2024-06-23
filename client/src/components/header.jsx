import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  
  const handlelogout = async () => {
    try {
      logout()
      navigate("/")
    } catch (error) {
      console.error('logout error', error);
    }
  }; 
  
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div>
          <Link to="/tab1" className="mr-4">Tab1</Link>
          <Link to="/tab2" className="mr-4">Tab2</Link>
        </div>
        <div>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.username}</span>
              <button
                onClick={handlelogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register" className="mr-4">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
